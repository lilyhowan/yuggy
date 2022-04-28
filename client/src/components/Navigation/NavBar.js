import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar mt-1 mx-3 mb-10 text-neutral-content">
      <div className="px-2 mx-2 navbar-start font-black text-primary">
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
