import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

// importing AOS animation and initializing it
AOS.init();

// Portfolio page with the card
function Portfolio() {
    return(
        <React.Fragment>
            <Navbar />
            <main className="container">
                <section className="row mx-auto px-auto paddingStyle">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 p-0 rounded">
                        <div className="card m-5" id="porfolioCard" data-aos="flip-left" data-aos-duration="1500">
                            <div className="card-body">
                                <h2 className="card-title cardHeader">Portfolio</h2>
                                <p className="cardHeader">The title links to the repository | The image links to the application</p>
                                <hr/>
                                <div className="row mx-auto px-auto">
                                    {/* Project component */}
                                <Project />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3"></div>
                    </div>
                </section>
            </main>
            <Footer />
        </React.Fragment>  
    );
};

export default Portfolio;