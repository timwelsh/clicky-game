import React from "react";
import "./style.css";

function Character(props) {
    return (
        <div className="card">
            <img 
            alt="card"
            src={props.image} />
        </div>
    )
}

export default Character;