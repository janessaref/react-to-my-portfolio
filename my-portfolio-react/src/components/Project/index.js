import React from "react";
import Projects from "../../Projects.json";
import "./style.css";

function Project() {
    return(
        <React.Fragment>
                {Projects.map(project => {
                    return(
                    <div className="row mx-auto px-auto">
                        <div lassName="col-lg-6">
                            <a 
                            href={project.githubURL} 
                            target="_blank"
                            rel="noreferrer"
                            className="mb-3 text-center ghURL"
                            >
                                <img 
                                src={project.logo}
                                alt="GitHub Logo"
                                className="mr-2 mb-2 ghLogo"
                               />
                            </a>
                            <a 
                            href={project.appURL} 
                            target="_blank"
                            rel="noreferrer"
                            className="mb-3 pt-3"
                            >
                                <img 
                                src={project.image}
                                alt={project.title}
                                className="img-thumbnail img-fluid float-left mx-auto mb-3 projIMG"
                                styles="height: auto; width:280px"/>
                                {project.title}
                            </a>
                        </div>
                        <div className="row mb-4"></div>
                    </div>
                    )
                })}
        </React.Fragment>
   
    )
};

export default Project;
