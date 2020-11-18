import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
    return(
    <header>
        <nav className="navbar navbar-expand-lg navbar-light">
            <h1 className="p-2 mb-2 ml-3" id="jfName">
                <a className="navbar-brand pl-3 px-1" id="jfLink" href="/">JANESSA FONG</a>
            </h1>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-md-auto">
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/portfolio" className="nav-link">Portfolio</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/" className="nav-link active">About<span className="sr-only">(current)</span></Link>
                    </li>

                </ul>
                <div className="px-3"></div>
            </div>
        </nav>
    </header>
    )
}

export default Navbar;