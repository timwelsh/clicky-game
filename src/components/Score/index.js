import React from 'react';
import './style.css';

function Score(props) {
  return(
    <>
      <div className="scoreBar">
        <span className="score">Current Score:{props.score}</span>
        <span className="best">Your Top Score:{props.topScore}</span>
      </div>
    </>
  )
}
export default Score;