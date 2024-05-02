
import React from "react";
import '../App.css'
function ButtonComponent (props){
    return(
        <button onClick = {props.onClick}  >
            {props.text} New Game
        </button>
    );
}

export default ButtonComponent;