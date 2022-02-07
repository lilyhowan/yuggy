import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home container mx-auto w-4/5 flex justify-center items-center mt-24 gap-6">
      <div id="home-left-wrapper" className="w-96">
        <h1>Yuggy</h1>
        <p>Yu-Gi-Oh! TCG Card Search</p>
        <div className="form-control">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter a card name"
              className="w-full pr-16 input input-primary input-bordered"
            />
            <button className="absolute top-0 right-0 rounded-l-none btn btn-primary" onClick={() => navigate({
              pathname: "/search", search:`?${createSearchParams({ foo: "bar" })}`
              })}>
              go
            </button>
          </div>
        </div>
      </div>
      <div id="home-right-wrapper" className="max-w-2xl">
        <img src="/blue-eyes-white-dragon.png" alt="Blue-eyes White Dragon" />
      </div>
    </div>
  );
}

export default Home;
