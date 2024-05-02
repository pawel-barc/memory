
import { useEffect, useState } from 'react'
import './App.css'
import CardsComp from './components/CardsComp'
import ButtonComponent from './components/button'
import TitleComponent from './components/Title';

const imagesCartes = [


{"src" : "/img/img1.jpg", matched: false },
{"src" : "/img/img2.jpg", matched: false },
{"src" : "/img/img3.jpg", matched: false },
{"src" : "/img/img4.jpg", matched: false },
{"src" : "/img/img5.jpg", matched: false },
{"src" : "/img/img6.jpg", matched: false },
{"src" : "/img/img7.jpg", matched: false },
{"src" : "/img/img8.jpg", matched: false }

]


function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [firstChoice, setfirstChoice] = useState(null)
  const [secondChoice, setsecondChoice] = useState(null)
  // Doublage et mélange des cartes
  const shuffleCards = () => {
    const shuffleCards = [ ...imagesCartes, ...imagesCartes]
    .sort(()  => Math.random() -0.5)
    .map ((card) => ({...card, id: Math.random() }))
setCards(shuffleCards)
setTurns(0)    

  }
  const handleChoice = (card) =>{
    firstChoice ? setsecondChoice (card) : setfirstChoice(card) 
  }
  useEffect(()=> {
    if (firstChoice && secondChoice ){
      if ( firstChoice.src === secondChoice.src){
        setCards(prevCards =>{
          return prevCards.map(card =>{
            if (card.src === firstChoice.src){
              return { ...card, matched: true}
            }else {
              return card
            }
          })
        })
        resetTurn()
      }else
      setTimeout (() => resetTurn(),1000)
    }

  }, [firstChoice, secondChoice])
  console.log (cards)
  const resetTurn = () =>{
    setfirstChoice(null)
    setsecondChoice(null)
    setTurns(prevTurns => prevTurns + 1)
  }
  return (
    
    <div className="App">
      <TitleComponent/> {}
    <ButtonComponent onClick={shuffleCards} />

    <div className='card-grid'>
      {cards.map(card =>(
        <CardsComp key ={card.id} card = {card}
        handleChoice = {handleChoice}
        flipped = { card === firstChoice || card === secondChoice || card.matched}
        />
      ))}
    </div>
    </div>
  );
}

export default App;

