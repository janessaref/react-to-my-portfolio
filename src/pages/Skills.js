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
                                <h2 className="card-title cardHeader">Technical Skills</h2>
                                <hr/>
                                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                                        <img src="../../assets/Git-Logo-Black.png" className="mr-2" width="100px" alt="git logo" />
                                    </a>
                                    
                                    <a href="https://www.mysql.com" target="_blank" rel="noreferrer">
                                        <img src="../../assets/logo-mysql.png" className="mr-2" width="100px" alt="mysql logo" />
                                    </a>

                                    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                                        <img src="../../assets/MongoDB_LogoStacked_FullColorBlack_RGB.png" className="mr-2" width="100px" alt="mongoDB logo" />
                                    </a>

                                    <a href="https://www.heroku.com/" target="_blank" rel="noreferrer">
                                        <img src="../../assets/heroku-logotype-vertical-purple.png" className="mr-2" width="100px" alt="heroku logo" />
                                    </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-2"></div> */}
                </section>
            </main>
            <Footer />
        </React.Fragment>     
    );
};

export default Skills;