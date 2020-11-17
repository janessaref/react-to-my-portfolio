import React from "react";
// import Container from "../components/Container"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const styles = {
    iconSize: {
        height: 30
    },
    card: {
        backgroundColor: "#ffcccc",
        borderRadius: 20,
        maxWidth: "100%",
        opacity: 0.9
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

function Contact() {
    return(
        <React.Fragment>
            <Navbar />
            <main className="container">
            <section className="row">
            <div className="col-sm-12 col-md-9 col-lg-9 p-5 rounded">
                <div className="card" style={styles.card}>
                    <div className="card-body">
                        <h2 className="card-title text-info font-weight-bold" style={styles.cardHeader}>Contact</h2>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-12 mb-3 p-4">
                                <form className="contactForm">
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Full Name</label>
                                        <input type="text" className="form-control" id="nameInput" placeholder="Full Name" style={styles.inputField} />
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleFormControlInput2">Email</label>
                                        <input type="email" className="form-control" id="emailInput" placeholder="Email" style={styles.inputField} />
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" id="messageInput" rows="3" placeholder="Message" style={styles.inputField}></textarea>
                                    </div>
                                    <button type="button" className="btn btn-outline-info mt-3 submitBtn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-lg-3"></div>

            {/* Phone Number and Email Card */}
            <div className="row ml-4 w-100 mr-5 text-center" style={styles.paddingStyle}>
                <div className="col-sm-12 col-md-9 col-lg-9 rounded">
                    <div className="card ml-2" style={styles.card}>
                        <div className="card-body">
                            <div class="row mx-auto h-auto w-auto">
                                <div className="col-lg-12 mx-auto h-auto w-auto">
                                    <strong className="mr-1">|</strong>
                                    <svg width=" 1.5em " height="1.5em " viewBox="0 0 16 16 " className="bi bi-phone" fill="currentColor " xmlns="http://www.w3.org/2000/svg ">
                                      <path fill-rule="evenodd " d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z "/>
                                      <path fill-rule="evenodd " d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z "/>
                                    </svg>
                                    <a href="tel:9256983569 " style={styles.contactInfo} className="mr-2">(925) 698-3569 
                                    </a>
                                    <strong>|</strong>
                                    <svg width="1.5em " height="1.5em " viewBox="0 0 16 16 " className="bi bi-envelope-open ml-2 mb-1" fill="currentColor " xmlns="http://www.w3.org/2000/svg ">
                                      <path fill-rule="evenodd " d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965
                                      4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z "/> 
                                    </svg>
                                    <a href="mailto:janessarefong@gmail.com " style={styles.contactInfo} className="ml-2">Email Me</a>
                                    <strong className="ml-1">|</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3 "></div>
            </div>
        </section>
    </main>
          <Footer />
        </React.Fragment>
         
    )
};

export default Contact;