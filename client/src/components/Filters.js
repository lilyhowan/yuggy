import React, { useEffect, useState } from "react";
import cardData from "../assets/cardData.json";
import AdvancedFilters from "./AdvancedFilters";

function Filters(props) {
  const [archetypes, setArchetypes] = useState([]);
  const [advanced, setAdvanced] = useState(false);

  // get card archetypes for select dropdown
  // TO-DO: add caching
  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/archetypes.php")
      .then((response) => response.json())
      .then((data) => {
        /*console.log("Fetching archetypes");
        setArchetypes(data.map((value) => value.archetype_name));*/
        setArchetypes(["placeholder"]);
      });
  }, []);

  return (
    <div className="Filters flex justify-center items-end gap-4">
      <div id="filter-search" className="form-control">
        <label className="label">Search</label>
        <input
          name="name"
          type="search"
          onChange={props.onChange}
          className="input input-bordered"
        />
      </div>
      <div id="filter-type" className="form-control">
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
      <div id="filter-race" className="form-control">
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
      <div id="filter-archetype" className="form-control">
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
        <button className="btn" onClick={() => setAdvanced(!advanced)}>Advanced Filters</button>
        {advanced && <AdvancedFilters onChange={props.onChange} />}
      </div>
    </div>
  );
}

export default Filters;
