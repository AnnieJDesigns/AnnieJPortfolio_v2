import React from "react";
import ProjectCard from "../ProjectCards/ProjectCards";
import { allProjects } from "./data";
import PopUp from "../PopUp/PopUp";




function scrollLeft() {
    let element = document.getElementById("program-wrapper-graphic");
    element.scrollLeft += 150;
}

function scrollRight() {
    let element = document.getElementById("program-wrapper-graphic");
    element.scrollLeft -= 50;
}


function GraphicDesignProjectGallery() {


    return (
        <div>
            <div className="program-header">
                <div className="title">
                    <h2>Graphic Design Projects</h2>
                </div>
                    <div className="carousel-button-group">
                        <button onClick={scrollRight} className="carousel-button" id="left-carousel-button"><h4>←</h4></button>
                        <button onClick={scrollLeft} className="carousel-button"><h4>→</h4></button>
                    </div>
            </div>
            <div id="program">
                    <div id="program-wrapper-graphic">
                        <div id="program-inner">
                            <div id="card-wrapper">
                            {allProjects.map((projectData, key) => {
                                return <ProjectCard key = {key} projectData={projectData} />;
                            })}
                            </div>
                        </div>
                    </div>
            </div>
            <div className="dotted-line"></div>
        </div>
    );
}

export default GraphicDesignProjectGallery;
