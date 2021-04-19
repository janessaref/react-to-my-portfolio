import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

// importing AOS animation and initializing it
AOS.init();

// About page with the card
function Skills() {
    return(
        <React.Fragment>
            <Navbar />
            <main className="container">
                <section className="row paddingStyle">
                    <div className="col-sm-12 col-md-12 col-lg-10 p-5 rounded">
                        <div className="card" data-aos="flip-down" data-aos-duration="3000">
                            <div className="card-body">
                                <h2 className="card-title cardHeader">About Me</h2>
                                <hr/>
                              
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </section>
            </main>
            <Footer />
        </React.Fragment>     
    );
};

export default Skills;