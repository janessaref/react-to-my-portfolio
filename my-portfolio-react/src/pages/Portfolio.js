import React from "react";
// import Container from "../components/Container"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Portfolio() {
    return(
        <React.Fragment>
            <Navbar />
            <main className="container">
                <section className="row mx-auto px-auto" style="padding-bottom: 100px;">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 p-0 rounded">
                        <div className="card m-5 cardPage" style="max-width: 100%; opacity:.9; height:auto">
                            <div className="card-body">
                                <h2 className="card-title text-info font-weight-bold" style="font-family: 'DM Serif Text', serif;">Portfolio</h2>
                                <hr/>
                                <div className="row mx-auto px-auto">
                                {/* add projects */}
                
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 "></div>
                    </div>
                </section>
            </main>
          <Footer />
        </React.Fragment>
         
    )
};

export default Portfolio;