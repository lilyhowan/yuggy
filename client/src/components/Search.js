import Card from "./Card";
import cardData from "../assets/cardData.json";
import React, { useEffect, useState } from "react";

function Search() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeQuery, setTypeQuery] = useState("");
  const [archetypeQuery, setArchetypeQuery] = useState("");
  const [archetypes, setArchetypes] = useState([]);

  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/archetypes.php")
      .then((response) => response.json())
      .then((data) => {
        const archetypeArr = [];
        data.map((value) => {
          archetypeArr.push(value.archetype_name);
        });
        setArchetypes(archetypeArr);
      });
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      let queryParameters = [];

      if (searchQuery !== "") {
        queryParameters.push(`fname=${searchQuery}`);
      }

      if (typeQuery !== "") {
        queryParameters.push(`type=${typeQuery}`);
      }

      if (archetypeQuery !== "") {
        queryParameters.push(`archetype=${archetypeQuery}`);
      }

      let searchString = (
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?" +
        queryParameters.join("&")
      ).replace(" ", "%20");
      console.log(searchString);

      if (searchString !== "https://db.ygoprodeck.com/api/v7/cardinfo.php?") {
        console.log("Searching...");
        fetch(searchString)
          .then((response) => response.json())
          .then(({ data: cards }) => {
            setCards(cards);
          });
      }
    }, 500);
    return () => clearTimeout(timeOut);
  }, [searchQuery, typeQuery, archetypeQuery]);

  return (
    <div className="Search container mx-auto w-4/5 flex flex-col gap-6">
      <div className="flex gap-4">
        <div id="filter-search" className="flex flex-col gap-2">
          <label className="font-medium">Search</label>
          <input
            type="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-black"
          />
        </div>
        <div id="filter-type" className="flex flex-col gap-2">
          <label className="font-medium">Type</label>
          <select
            onChange={(e) => setTypeQuery(e.target.value)}
            className="text-black"
          >
            <option value="" selected>
              Card type
            </option>
            {cardData.cardTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div id="filter-archetype" className="flex flex-col gap-2">
          <label className="font-medium">Archetype</label>
          <select
            onChange={(e) => setArchetypeQuery(e.target.value)}
            className="text-black"
          >
            <option value="" selected>
              Archetype
            </option>
            {archetypes.map((archetype) => (
              <option key={archetype} value={archetype}>
                {archetype}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div id="cardGrid" className="grid grid-cols-[repeat(auto-fill,_minmax(15rem,_auto))] gap-5">
        {cards &&
          cards.map((card) => (
            <Card
              name={card.name}
              type={card.type}
              url={card.card_images[0].image_url}
              atk={card.atk}
              def={card.def}
              owned="0"
              ran="0"
              key={card.name}
            />
          ))}
      </div>
    </div>
  );
}

export default Search;
