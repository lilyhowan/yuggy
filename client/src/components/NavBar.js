import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
    return (
        <nav className="NavBar flex justify-between p-6 mb-6">
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
