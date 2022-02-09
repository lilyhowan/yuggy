import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      <div className="px-2 mx-2 navbar-start">
        <Link to="/">Yuggy</Link>
      </div>
      {/*<div className="hidden px-2 mx-2 navbar-center lg:flex">
        <ul className="flex">
          <li>Sign Up</li>
        </ul>
  </div>*/}
      <div className="px-2 mx-2 navbar-end">
        <NavLink to="/search">Search</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
