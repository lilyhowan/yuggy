import React, { useEffect, useState } from "react";
import cardData from "../assets/cardData.json";

function Filters(props) {
  return (
    <div className="Filters flex justify-center gap-4">
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
          {props.archetypes.map((archetype) => (
            <option key={archetype} value={archetype}>
              {archetype}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
