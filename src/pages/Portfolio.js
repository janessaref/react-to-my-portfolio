import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project";
import AOS from "aos";
import "aos/dist/aos.css";

// importing AOS animation and initializing it
AOS.init();

// Stylng for Portfolio page
const styles = {
    iconSize: {
        height: 30
    },
    card: {
        backgroundColor: "#ced1c1",
        borderRadius: 20,
        maxWidth: "100%",
        opacity: 0.9,
        height: "auto"
    },
    cardHeader: {
        fontFamily: "DM Serif Text, serif"
    },
    inputField: {
        backgroundColor: "#ffe8e8",
        borderRadius: 12
    },
    contactInfo: {
        color: "black"
    },
    paddingStyle: {
        paddingBottom: 100
    }
};

// Portfolio page with the card
function Portfolio() {
    return(
        <React.Fragment>
            <Navbar />
            <main className="container">
                <section className="row mx-auto px-auto" style={styles.paddingStyle}>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 p-0 rounded">
                        <div className="card m-5" data-aos="flip-left" data-aos-duration="1500" style={styles.card}>
                            <div className="card-body">
                                <h2 className="card-title" style={styles.cardHeader}>Portfolio</h2>
                                <p style={styles.cardHeader}>The title links to the repository | The image links to the application</p>
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