import './CardsComp.css'
export default function CardsComp({card, handleChoice, flipped}) {
  const handleClick = () => {
    handleChoice(card)
  }
    return(
      
        <div className='card'>
          <div className = {flipped ? ' flipped' : ''}>
            <img className='frontside' src = {card.src} alt='frontside'/>
            <img className='backside' src='/img/img.jpg' onClick = {handleClick} alt='backside'/>
          </div>
        </div>  
    )
}