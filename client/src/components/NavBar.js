import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div className="px-2 mx-2 navbar-start">yuggy</div>
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <ul className="flex">
                    <li className="mr-6"><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/search">Search</NavLink></li>
                </ul>
            </div>
            <div class="px-2 mx-2 navbar-end">
                navbar-end
            </div>
        </nav>
    );
}

export default NavBar;
