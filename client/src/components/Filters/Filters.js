import React, { useEffect, useState } from "react";
import cardData from "../../assets/cardData.json";
import AdvancedFilters from "./AdvancedFilters";

function Filters(props) {
  const [archetypes, setArchetypes] = useState([]);
  const [advanced, setAdvanced] = useState(false);

  // get card archetypes for select dropdown
  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/archetypes.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetching archetypes");
        setArchetypes(data.map((value) => value.archetype_name));
      });
  }, []);

  return (
    <div className="Filters flex justify-center items-end gap-4">
      <div id="filter-search">
        <label className="label">Search</label>
        <input
          name="fname"
          type="search"
          onChange={props.onChange}
          className="input input-bordered"
        />
      </div>
      <div id="filter-type" className="hidden sm:flex sm:flex-col">
        <label className="label">Type</label>
        <select
          name="type"
          onChange={props.onChange}
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
      {/* this is called "race" in the API, but is officially known as monster/card type (depending on the card's type) */}
      <div id="filter-race" className="hidden lg:flex lg:flex-col">
        <label className="label">Monster/Card Type</label>
        <select
          name="race"
          onChange={props.onChange}
          className="select select-bordered"
        >
          <option value="" selected>
            Any
          </option>
          {cardData.cardRaces.map((race) => (
            <option key={race} value={race}>
              {race}
            </option>
          ))}
        </select>
      </div>
      <div id="filter-archetype" className="hidden lg:flex lg:flex-col">
        <label className="label">Archetype</label>
        <select
          name="archetype"
          onChange={props.onChange}
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
      <div className="advanced-filters relative">
        <button className="btn" onClick={() => setAdvanced(!advanced)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="white"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
          </svg>
        </button>
        {advanced && <AdvancedFilters onChange={props.onChange} />}
      </div>
    </div>
  );
}

export default Filters;
