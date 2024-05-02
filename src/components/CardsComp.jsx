import './CardsComp.css'
export default function CardsComp({card}) {
    return(
        <div className='card'>
          <div>
            <img className='frontside' src = {card.src} alt='cardfront'/>
            <img className='backside' src='/img/img.jpg' alt='backside'/>
          </div>
        </div>  
    )
}