import React from 'react';
import './App.css';
import Character from './components/Character';
import Score from './components/Score';
import MickeyArray from './MickeyArray.json';

const clickedArray =[]
class App extends React.Component {
  state={
    MickeyArray,
    topScore: 0,
    score: 0
  }

  shuffle = () =>{
    let newOrder = this.state.MickeyArray
    for (let i = newOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
    }
    this.setState({
      MickeyArray: newOrder,
    })
  };

  clicked = (id) => {
    if(this.state.topScore === 12) {
      alert("You win!!")
    }
    if(clickedArray.includes(id)){
      if(this.state.score >= this.state.topScore) {
          this.setState({
            topScore: this.state.score,
            score: 0
          })
          clickedArray.length = 0
      } else if (this.state.score < this.state.topScore) {
        this.setState({
          score: 0
        })
        clickedArray.length = 0
      }
    } else {
      clickedArray.push(id);
      this.setState({
        score: this.state.score + 1
      })
      console.log(this.state.score)
    }
  }
  
  render() {
    return (
      <>
        <div className="container">
          <h1 className="centerTitle">Guess Which Mickey</h1>
        </div>
        <Score topScore={this.state.topScore} score={this.state.score}/>
        {this.state.MickeyArray.map(character => (
          <div key={character.id} onClick={() => this.clicked(character.id)}>
            <Character
              id={character.id}
              key={character.id}
              image={character.image}
              shuffleCards={this.shuffle}
            />
            </div>
          ))}
      </>
    )
  }
}
export default App;