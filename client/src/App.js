import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Search from './components/Search';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=blue-eyes")
      .then(response => response.json())
      .then(({ data: cards }) => {
        setCards(cards);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>

    </div>
  );
}

export default App;
