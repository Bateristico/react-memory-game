import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard.js';

const cardImages = [
  { src: 'img/helmet-1.png' },
  { src: 'img/potion-1.png' },
  { src: 'img/ring-1.png' },
  { src: 'img/scroll-1.png' },
  { src: 'img/shield-1.png' },
  { src: 'img/sword-1.png' }
];

function App() {
  const [cards, setCards] = useState([]);
  // increasing turns every game
  const [turns, setTurns] = useState(0);
  // store the two cards the user chooses
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // need to shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = card => {
    // check if there has been choice one already
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare the two options selected by the user
  useEffect(() => {
    // avoid the component mounted execution
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log('MATCH');
        resetTurn();
      } else {
        console.log('DOES NOT MATCH');
        resetTurn();
      }
    } else {
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          // console.log(card)
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
