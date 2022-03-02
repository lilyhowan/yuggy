import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Search from "./components/Search";
import CardPage from "./components/CardPage";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/card/:id" element={<CardPage />} />
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
