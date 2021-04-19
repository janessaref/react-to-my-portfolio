import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

// Navbar for all my pages with NavLinks
function Navbar() {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <h1 className="p-2 mb-2 ml-3" id="jfName">
                    <NavLink to="/" className="navbar-brand pl-3 px-1" id="jfLink" >JANESSA FONG</NavLink>
                </h1>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-md-auto">
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link links">Contact</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/portfolio" className="nav-link links">Portfolio</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink to="/skills" className="nav-link links">Skills</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link links">About</NavLink>
                        </li>

                    </ul>
                    <div className="px-3"></div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;