import React from "react";
import ProjectCard from "../ProjectCards/ProjectCards";
import { allProjects } from "./data";

function scrollLeft() {
    let element = document.getElementById("program-wrapper");
    element.scrollLeft += 150;
}

function scrollRight() {
    let element = document.getElementById("program-wrapper");
    element.scrollLeft -= 150;
}

function CodingProjectGallery() {

    return (
        <div>
            <div className="title">
            <h2>DevProjects</h2>
            </div>
            <div id="program">
            <button onClick={scrollRight} className="carousel-button" id="left-carousel-button"><h4>←</h4></button>
                    <div id="program-wrapper">
                        <div id="program-inner">
                            <div id="card-wrapper">
                            {allProjects.map((projectData, key) => {
                                return <ProjectCard key = {key} projectData={projectData} />;
                            })}
                            </div>
                        </div>
                    </div>
                <button onClick={scrollLeft} className="carousel-button"><h4>→</h4></button>
            </div>
            <div className="dotted-line"></div>
        </div>
    );
}

export default CodingProjectGallery;
