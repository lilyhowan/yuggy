import CardGrid from "./CardGrid";
import Filters from "./Filters";
import React, { useEffect, useState } from "react";

function Search() {
  const [archetypes, setArchetypes] = useState([]);
  const [cards, setCards] = useState(null);
  const [query, setQuery] = useState({
    "name": "",
    "type": "",
    "archetype": ""
  });

  const handleQueryChange = (e) => {
    setQuery(query => ({...query, [e.target.name]: e.target.value}));
  };

  // get card archetypes for select dropdown
  // TO-DO: add caching
  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/archetypes.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetching archetypes")
        setArchetypes(data.map((value) => value.archetype_name));
      });
  }, []);

  // fetch cards from API using query parameters
  useEffect(() => {
    const timeOut = setTimeout(() => {
      let queryParameters = [];

      if (query.name !== "") {
        queryParameters.push(`fname=${query.name}`);
      }

      if (query.type !== "") {
        queryParameters.push(`type=${query.type}`);
      }

      if (query.archetype !== "") {
        queryParameters.push(`archetype=${query.archetype}`);
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
  }, [query]);

  return (
    <div className="Search container mx-auto w-4/5 flex flex-col gap-6 text-center">
      <Filters onChange={handleQueryChange} archetypes={archetypes} />
      {cards ? <CardGrid cards={cards} /> : "No Results"}
    </div>
  );
}

export default Search;
