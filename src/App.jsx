// Ici se déroule l'import des hooks et des components
import { useEffect, useState } from 'react'
import './App.css'
import CardsComp from './components/CardsComp'
import ButtonComponent from './components/button'
import TitleComponent from './components/Title'

// Le tableau de liens des images, valeur initiale
const imagesCartes = [

{"src" : "/img/img1.jpg", matched: false },
{"src" : "/img/img2.jpg", matched: false },
{"src" : "/img/img3.jpg", matched: false },
{"src" : "/img/img4.jpg", matched: false },
{"src" : "/img/img5.jpg", matched: false },
{"src" : "/img/img6.jpg", matched: false },
{"src" : "/img/img7.jpg", matched: false },
{"src" : "/img/img8.jpg", matched: false },
{"src" : "/img/img9.jpg", matched: false }

]
// La fonction App contient l'ensemble du code pour application. Cette fonction est un composant React
// qui rend l'interface utilisateur d'application. 'set' est une fonction interieur du 'State'.
function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [firstChoice, setfirstChoice] = useState(null)
  const [secondChoice, setsecondChoice] = useState(null)
  const [allMatched, setAllMatched] = useState(false);

  // Doublage et mélange des cartes
  const shuffleCards = () => {
    const shuffleCards = [ ...imagesCartes, ...imagesCartes]
    .sort(()  => Math.random() -0.5)
    .map ((card) => ({...card, id: Math.random() }))
  setCards(shuffleCards)
  setTurns(0)
  setAllMatched(false);
  }
  // Indique la carte choisie par jouer, soit la première soit la deuxiéme
  const handleChoice = (card) =>{
    firstChoice ? setsecondChoice (card) : setfirstChoice(card) 
  }
  // Ici useEffect est appelé chaque fois quand la valeur des cartes change
  //quand tout les cartes sont appariées il définie allMatched sur true
  useEffect(() => {
    if (cards.every(card => card.matched)) {
      setAllMatched(true);
    } else {
      setAllMatched(false);
    }
  }, [cards]);

  // Ici useEffect est appelé chaque fois quand la valeur de firstChoice ou secondChoice a changé
  // il compare aussi si les deux valeurs choisie par le jouer sont pareils, si oui il définie 'matched' sur true
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

  //Après le chois de la seconde carte, le compteur des mouvements va ajouter la valeur de un
  }, [firstChoice, secondChoice])
  console.log (cards)
  const resetTurn = () =>{
    setfirstChoice(null)
    setsecondChoice(null)
    setTurns(prevTurns => prevTurns + 1)
  }
  return (
    // Affichage des mouvements, et les composents comme du titre et du boutton  
    <div className="App">
      <TitleComponent/> {}
    <ButtonComponent onClick={shuffleCards} />
    <div className="turns-counter">Turns: {turns}</div>
    <div className='card-grid'>
      {cards.map(card =>(
        <CardsComp key ={card.id} card = {card}
        handleChoice = {handleChoice}
        flipped = { card === firstChoice || card === secondChoice || card.matched}
        />
      ))}
    </div>
    {allMatched && (
      <div className="congratulations">
      </div>
    )}
    </div>
  );
}

export default App;

