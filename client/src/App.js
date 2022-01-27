import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import React, { useEffect, useState } from 'react';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=blue-eyes")
      .then(response => response.json())
      .then(({ data: cards }) => {
        setCards(cards);
      });
  }, []);

  return (
    <div className="App bg-black text-white">
      <NavBar />
      <div id="deck-wrapper" className="flex flex-wrap justify-between gap-5">
        {cards.map(card => (
          <Card name={card.name} type={card.type} url={card.card_images[0].image_url} atk={card.atk} def={card.def} owned="0" ran="0" key={card.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
