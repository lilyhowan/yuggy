import CardGrid from "./CardGrid";
import Filters from "./Filters/Filters";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cards, setCards] = useState(null);

  const handleQueryChange = (e) => {
    // if the query has a value, add it to the existing parameters
    // if not, set the parameters to an object without that key
    if (e.target.value) {
      setSearchParams({
        ...Object.fromEntries([...searchParams]),
        [e.target.name]: e.target.value
      });
    } else {
      let newParams = { ...Object.fromEntries([...searchParams]) };
      delete newParams[e.target.name];
      setSearchParams(newParams);
    }
  };

  // fetch cards from API using search parameters
  // there is a timeout after the search params change to reduce the number requests sent
  useEffect(() => {
    const timeOut = setTimeout(() => {
      let query = { ...Object.fromEntries([...searchParams]) };
      let queryParameters = Object.keys(query)
        .filter((key) => query[key] !== "")
        .map((key) => `${key}=${query[key]}`);

      let searchString = (
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?" +
        queryParameters.join("&")
      ).replace(/ /g, "%20");

      if (searchString !== "https://db.ygoprodeck.com/api/v7/cardinfo.php?") {
        console.log(`Searching... (${searchString})`);
        fetch(searchString)
          .then((response) => response.json())
          .then(({ data: cards }) => {
            setCards(cards);
          });
      }
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [searchParams]);

  return (
    <div className="Search container mx-auto w-4/5 flex flex-col gap-6 text-center">
      <Filters onChange={handleQueryChange} searchParams={searchParams} />
      {cards ? <CardGrid cards={cards} /> : "No Results"}
    </div>
  );
}

export default Search;