import React from "react";
import ProjectCardsDevProject from "../ProjectCardDevProject/ProjectCardsDevProject";
import { allProjects } from "./data";

function scrollLeft() {
    let element = document.getElementById("program-wrapper-dev");
    element.scrollLeft += 150;
}

function scrollRight() {
    let element = document.getElementById("program-wrapper-dev");
    element.scrollLeft -= 150;
}

function CodingProjectGallery() {

    return (
        <div>
            <div className="program-header">
                <div className="title">
                    <h2>DevProjects</h2>
                </div>
                <div className="carousel-button-group">
                    <button onClick={scrollRight} className="carousel-button" id="left-carousel-button"><h4>←</h4></button>
                    <button onClick={scrollLeft} className="carousel-button"><h4>→</h4></button>
                </div>
            </div>
            <div id="program">
                    <div id="program-wrapper-dev">
                        <div id="program-inner">
                            <div id="card-wrapper">
                            {allProjects.map((projectData, key) => {
                                return <ProjectCardsDevProject key = {key} projectData={projectData} />;
                            })}
                            </div>
                        </div>
                    </div>
            </div>
            <div className="dotted-line"></div>
        </div>
    );
}

export default CodingProjectGallery;
