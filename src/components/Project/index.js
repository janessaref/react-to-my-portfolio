import React from "react";
import Projects from "../../Projects.json";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

// importing AOS animation and initializing it
AOS.init();

// Project component looping through each of my projects from the Projects.json file containing information for each project
function Project() {
    return(
        <React.Fragment>
            {Projects.map(project => {
                return(
                    <>
                    <div className="col-lg-6" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-duration="1500">
                        <a 
                            href={project.githubURL} 
                            target="_blank"
                            rel="noreferrer"
                            className="mb-3 text-center githubLink">   
                            <img 
                                src={project.logo}
                                alt="GitHub Logo"
                                className="mr-2 mb-2 ghLogo" />
                                {project.title}
                        </a>
                        <a 
                            href={project.appURL} 
                            target="_blank"
                            rel="noreferrer"
                            className="mb-3 pt-3">
                            <img 
                                src={project.image}
                                alt={project.title}
                                className="img-thumbnail img-fluid float-left mx-auto mb-3 projIMG" />
                        </a>
                    </div>
                    <div className="row mb-4 mr-1"></div>
                    </>
                    )
            })};
        </React.Fragment>
    );
};

export default Project;
