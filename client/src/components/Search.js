import CardGrid from "./CardGrid";
import cardData from "../assets/cardData.json";
import React, { useEffect, useState } from "react";

function Search() {
  // card state
  const [archetypes, setArchetypes] = useState([]);
  const [cards, setCards] = useState([]);

  // query state
  const [searchQuery, setSearchQuery] = useState("");
  const [typeQuery, setTypeQuery] = useState("");
  const [archetypeQuery, setArchetypeQuery] = useState("");

  // get card archetypes for select dropdown
  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/archetypes.php")
      .then((response) => response.json())
      .then((data) => {
        const archetypeArr = data.map((value) => value.archetype_name);
        setArchetypes(archetypeArr);
      });
  }, []);

  // fetch cards from API using query parameters
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

      if (searchString !== "https://db.ygoprodeck.com/api/v7/cardinfo.php?") {
        console.log(`Searching... (${searchString})`);
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
        <div id="filter-search" className="form-control">
          <label className="label">Search</label>
          <input
            type="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered"
          />
        </div>
        <div id="filter-type" className="form-control">
          <label className="label">Type</label>
          <select
            onChange={(e) => setTypeQuery(e.target.value)}
            className="select select-bordered"
          >
            <option value="" selected>
              Any
            </option>
            {cardData.cardTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div id="filter-archetype" className="form-control">
          <label className="label">Archetype</label>
          <select
            onChange={(e) => setArchetypeQuery(e.target.value)}
            className="select select-bordered"
          >
            <option value="" selected>
              Any
            </option>
            {archetypes.map((archetype) => (
              <option key={archetype} value={archetype}>
                {archetype}
              </option>
            ))}
          </select>
        </div>
      </div>
      <CardGrid cards={cards} />
    </div>
  );
}

export default Search;
