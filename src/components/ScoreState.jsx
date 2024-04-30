import React, { useState } from 'react';
import Button from '../Button/Button';
function ScoreState(props){
    const [ score, setScore ] = useState(0)
    
    function click (){
      setScore( score + 1)
    }
    return(  
        <>
    <Button onClick = {click()}/>
      <p >Mon score est de {score}</p>
      </>
    )
  }

  export default ScoreState;