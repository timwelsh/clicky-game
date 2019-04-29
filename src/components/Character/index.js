import React from 'react';
import './style.css';

function Character(props){
    return (
        <div>
            <img 
                alt="Character" 
                src={props.image} 
                className="charImage"
                onClick={props.shuffleCards}
            />
        </div>
    )
}
export default Character;