import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  imageData from './imageData.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: imageData 
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    console.log("we got clicked", e.target.name)
    function shuffle(array) {
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;

            }

        return array;
    }
    let newOrder = shuffle(this.state.images)
    this.setState({images: newOrder})
  }

  

  render() {
    console.log("this is the image", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.images.map((singleImage)=>{
            return (
              <img name={singleImage.id} className="clickyImage" onClick={this.handleClick} src={singleImage.imageUrl} />
            )
          })}

        </p>
      </div>
    );
  }
}

// <img scr={"http://www.smashinglists.com/wp-content/uploads/2012/09/Muhammad-Ali.jpg"}
// <img src={"http://images.indianexpress.com/2016/06/vasyl-lomachenko_ap-m.jpg"}
// <img src={"https://qph.fs.quoracdn.net/main-qimg-397e2ad7e460417b23128b5f04f541f1"}
// <img src={"https://cdn.vox-cdn.com/thumbor/YdjOJ52qVB4MbHchey-3A4Tj4qg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9295429/697117310.jpg"}
// <img src={"https://static.pulse.ng/img/incoming/origs7525904/949636898-w644-h960/Anthony-Joshua-.jpg"}
export default App;
