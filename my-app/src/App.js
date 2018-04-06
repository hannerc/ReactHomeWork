import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import cards from "./cards.json";
import './App.css';
import CardDivs from "./components/CardDivs";
import Score from "./components/Score"

class App extends Component {

  state = {
    cards
  };

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Score />
        {/* {this.state.cards.map(card => (
          <CardDivs 
          image = {card.image}
          key = {card.id}
        />))} */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
