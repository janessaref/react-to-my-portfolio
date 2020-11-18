import React from "react";
import "./style.css"

function Footer() {

    return (
        <footer className="jumbotron jumbotron-fluid mt-2 mb-4 p-4 fixed-bottom" id="mainFooter">
            <div className="jumbotron jumbotron-fluid mt-5 mb-0 p-3 pt-5 fixed-bottom" id="childFooter">
                <div className="container fixed-bottom text-center mb-2">
                    <p>&#169; Copyright 2020 Fong</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
