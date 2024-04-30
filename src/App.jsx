
import { useState } from 'react'
import './App.css'

const imagesCartes = [


{"src" : "/img/img1.jpg"},
{"src" : "/img/img2.jpg"},
{"src" : "/img/img3.jpg"},
{"src" : "/img/img4.jpg"},
{"src" : "/img/img5.jpg"},
{"src" : "/img/img6.jpg"},
{"src" : "/img/img7.jpg"},
{"src" : "/img/img8.jpg"}

]


function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  // Doublage et mélange des cartes
  const shuffleCards = () => {
    const shuffleCards = [ ...imagesCartes, ...imagesCartes]
    .sort(()  => Math.random() -0.5)
    .map ((card) => ({...card, id: Math.random() }))
setCards(shuffleCards)
setTurns(0)    

  }
  console.log(cards, turns);
  return (
    
    <div className="App">
      <h1> Memory Game </h1>
    <button onClick={shuffleCards}> New game </button>
    <div className='card-grid'>
      {cards.map(card =>(
        <div className='card'  key={card.id}>
          <div>
            <img className='frontside' src = {card.src} alt='cardfront'/>
            <img className='backside' src='/img/img.jpg' alt='backside'/>
          </div>
        </div>  
      ))}
    </div>
    </div>
  );
}

export default App;

