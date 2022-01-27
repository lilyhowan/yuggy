import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Search from './components/Search';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";

function App() {
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
