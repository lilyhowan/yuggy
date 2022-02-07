import React from "react";

function AdvancedFilters(props) {
  return (
    <div className="absolute bg-primary-content flex gap-4 right-0 mt-2 p-3 rounded-md z-10">
      <div id="filter-attribute" className="form-control">
        <label className="label">
          <span className="label-text">Attribute</span>
        </label>
        <select
          name="attribute"
          value={props.searchParams.get("attribute") || ""}
          onChange={props.onChange}
          className="select select-bordered"
        >
          <option value="">
            Any
          </option>
          <option value="dark">DARK</option>
          <option value="divine">DIVINE</option>
          <option value="earth">EARTH</option>
          <option value="fire">FIRE</option>
          <option value="light">LIGHT</option>
          <option value="water">WATER</option>
          <option value="wind">WIND</option>
        </select>
      </div>
      <div id="filter-banlist" className="form-control">
        <label className="label">
          <span className="label-text">Ban List</span>
        </label>
        <select
          name="banlist"
          value={props.searchParams.get("banlist") || ""}
          onChange={props.onChange}
          className="select select-bordered"
        >
          <option value="">
            Any
          </option>
          <option value="tcg">TCG</option>
          <option value="ocg">OCG</option>
          <option value="goat">Goat</option>
        </select>
      </div>
    </div>
  );
}

export default AdvancedFilters;
