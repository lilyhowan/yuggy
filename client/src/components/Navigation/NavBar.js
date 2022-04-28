import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="max-w-[100rem] mx-auto flex justify-between py-6">
      <Link to="/" className="text-accent font-black">YUGGY</Link>
      <NavLink to="/search">Search</NavLink>
    </nav>
  );
}

export default NavBar;
