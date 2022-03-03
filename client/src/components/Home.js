import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: -10 }}
      transition={{ duration: 1 }}
      className="container mx-auto max-w-none p-6 flex flex-wrap-reverse gap-0 justify-center items-center md:flex-nowrap md:gap-6 prose prose-h1:mb-0"
    >
      <div id="home-left-wrapper" className="max-w-md">
        <h1>Search, filter and find</h1>
        <p>
          Yuggy is a Yu-Gi-Oh! TCG card search web app which allows you to
          search and view cards. All information is fetched from the{" "}
          <a
            href="https://db.ygoprodeck.com/api-guide/"
            target="_blank"
            rel="noreferrer"
          >
            YGOPRODeck API
          </a>
          .
        </p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Search for a card</span>
          </label>
          <form
            className="relative"
            onSubmit={() =>
              query.trim() !== ""
                ? navigate(`/search?fname=${query}`)
                : navigate("/search")
            }
          >
            <input
              type="text"
              placeholder="Enter a card name"
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pr-16 input input-primary input-bordered"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 rounded-l-none btn btn-primary"
            >
              GO
            </button>
          </form>
        </div>
      </div>
      <div id="home-right-wrapper">
        <img src="/scapegoat.gif" alt="Scapegoat" />
      </div>
    </motion.div>
  );
}

export default Home;
