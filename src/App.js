import React, { Component } from "react";
import Character from "./components/Character"
import './App.css';

class App extends Component {
  state = {
    character: ""
  }

  render() {
    return (
      <>
        {
          this.state.characters.map(character => (
            <Character image={character.image} />
          ))
        }
      </>
    )
  }
}


export default App;
