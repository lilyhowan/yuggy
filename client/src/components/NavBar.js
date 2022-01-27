import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="NavBar flex justify-between px-10 py-6 mb-6">
            <div>yuggy</div>
            <div>
                <ul className="flex">
                    <li className="mr-6"><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/search">Search</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
