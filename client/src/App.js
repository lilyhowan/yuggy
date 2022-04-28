import NavBar from "./components/Navigation/NavBar";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import CardPage from "./pages/Card/CardPage";
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
