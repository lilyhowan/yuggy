import Card from './Card';
import React, { useEffect, useState } from 'react';

function Search() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeQuery, setTypeQuery] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log('Searching...')
      fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchQuery}&type=${typeQuery}`)
      .then(response => response.json())
      .then(({ data: cards }) => {
        setCards(cards);
      });
    }, 500);
    return () => clearTimeout(timeOut);
  }, [searchQuery, typeQuery]);

  return (
    <div className="Search container mx-auto w-4/5">
      <div className="flex flex-col">
        <div id="filter-search">
          <label>Search</label>
          <input type="search" onChange={e => setSearchQuery(e.target.value)} className="text-black" />
        </div>
        <div id="filter-type">
          <label>Type</label>
          <input type="search" onChange={e => setTypeQuery(e.target.value)} className="text-black" />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-5">
          {cards && cards.map(card => (
              <Card name={card.name} type={card.type} url={card.card_images[0].image_url} atk={card.atk} def={card.def} owned="0" ran="0" key={card.name} />
          ))}
      </div>
    </div>
  );
}

export default Search;
