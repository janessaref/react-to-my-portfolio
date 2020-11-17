import React from "react";


function Project() {
    return(
        <React.Fragment>
            <div className="row mx-auto px-auto">
                {/* <!-- PLAYR Github repo and deployed link --> */}
                <div className="col-lg-6">
                    <a href="https://github.com/janessaref/Playr/tree/script" target="_blank" rel="noreferrer" className="mb-3 text-center" styles="font-size: 13px; color:black">
                        <img src="../../assets/GitHub-Mark-32px.png" alt="github logo" className="mr-2 mb-2" styles="height:auto; width:30px" />PLAYR MUSIC
                    </a>
                    <a href="https://janessaref.github.io/Playr/" className="mb-3 pt-3">
                        <img src="assets/images/playr.png" alt="playr website" className="img-thumbnail img-fluid float-left mx-auto mb-3" styles="height:auto; width:280px" />
                    </a>
                </div>
                {/* <!-- Password Generator Github repo and deployed link --> */}
                <div className="col-lg-6">
                    <a href="https://github.com/janessaref/password-generator" target="_blank" rel="noreferrer" className="mb-3 text-center" styles="font-size: 13px; color:black">
                        <img src="../../assets/GitHub-Mark-32px.png" alt="github logo" className="mr-2 mb-2" styles="height:auto; width:30px" /> PASSWORD GENERATOR
                    </a>
                    <a href="https://janessaref.github.io/password-generator/" className="mb-3">
                        <img src="assets/images/password-generator.png" alt="password generator" className="img-thumbnail img-fluid float-left mx-auto" styles="height:auto; width:280px" />
                    </a>
                </div>
            </div>
            <div className="row mb-4"></div>
        </React.Fragment>
   
    )
};

export default Project;