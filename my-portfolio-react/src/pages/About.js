import React from "react";
// import Container from "../components/Container"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Card from "../components/Card";

const styles = {
    imageSize: {
        maxWidth: 250,
        maxHeight: 250
    },
    iconSize: {
        height: 30
    }
}


function About() {
    return(
        <React.Fragment>
            <Navbar />
            <main className="container">
            <section className="row" styles="padding-bottom: 100px;">
                <div className="col-sm-12 col-md-12 col-lg-10 p-5 rounded">
                    <div className="card cardPage" styles="max-width: 100%; opacity:.9">
                        <div className="card-body">
                            <h2 className="card-title text-info font-weight-bold" styles="font-family: 'DM Serif Text', serif;">About Me</h2>
                            <hr/>
                            <div className="row">
                                <div class="col-sm-12 col-md-12 mb-4">
                                    <img src="../../assets/me.jpg" alt="Janessa Fong" className="img-thumbnail float-left mr-4 picMe" style={styles.imageSize} />
                                    <p className="card-text">I currently live in Walnut Creek, California. I'm currently enrolled as a full-time student in UC Berkeley's Coding Bootcamp Program. I was born on March 16, 1995. I grew up in Manila, Philippines. I graduated with a bachelor's
                                        degree in Management of Financial Institutions in 2017 at De La Salle University - Manila. I am a dancer who was a part of the official dance organization of the university known as La Salle Dance Company - Street.
                                        I took up leadership roles in the organization as the division manager for finance in 2015-2016 and division manager of marketing in 2016-2017.
                                    </p>

                                    <p className="card-text">I'm a competitive person. My sport is badminton. I am into fashion and I also love music. The instruments I play are the piano and the ukulele. I enjoy karaoke. I am adventurous and love amusement parks. I love animals.
                                        I love to travel and eat.
                                    </p>

                                    <p className="card-text">Check out my social media accounts:</p>

                                    <a href="https://www.facebook.com/jerrikarefong/" target="_blank" rel="noreferrer">
                                        <img src="../../assets/f_logo_RGB-Black_58.png" style={styles.iconSize} className="mr-2" alt="facebook logo" />
                                    </a>

                                    <a href="https://www.instagram.com/gummyjerbear/" target="_blank" rel="noreferrer">
                                        <img src="../../assets/glyph-logo_May2016.png" style={styles.iconSize} className="mr-2" alt="instagram logo" />
                                    </a>
                                    <a href="https://github.com/janessaref/" target="_blank" rel="noreferrer">
                                        <img src="../../assets/GitHub-Mark-32px.png" style={styles.iconSize} className="mr-2" alt="github logo" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/janessafong/" target="_blank" rel="noreferrer">
                                        <img src="../../assets/In-Black-34px-R.png" style={styles.iconSize} className="mr-2" alt="linkedin logo" />
                                    </a>
                                    <br/>
                                    <br/>
                                    <a href="assets/images/Resume_(Fong).pdf" target="_blank" rel="noreferrer" styles="color:black">
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-file-earmark-person mb-1 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                                            <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
                                            <path fill-rule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            <path d="M8 12c4 0 5 1.755 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12z"/>
                                        </svg> Janessa Fong's Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </section>
            </main>
          <Footer />
        </React.Fragment>
         
    )
};

export default About;