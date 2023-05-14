import React from "react";
import ProjectCard from "../ProjectCards/ProjectCards";
import { allProjects } from "./data";
import PopUp from "../PopUp/PopUp";
import { useState } from "react";
import PopUpLink from "../PopUpLink/PopUpLink";

function scrollLeft() {
    let element = document.getElementById("program-wrapper");
    element.scrollLeft += 150;
}

function scrollRight() {
    let element = document.getElementById("program-wrapper");
    element.scrollLeft -= 150;
}


function GraphicDesignProjectGallery() {

    const [buttonPopUp, setButtonPopUp] = useState(false);

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
                    <div id="program-wrapper">
                        <div id="program-inner">
                            <div id="card-wrapper">
                            {allProjects.map((projectData, key) => {
                                return <ProjectCard key = {key} projectData={projectData} />;
                            })}
                            </div>
                            <button onClick={() => setButtonPopUp(true)}>Open</button>
                                <div>
                                <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                                </PopUp>
                                </div>
                        </div>
                    </div>
            </div>
            <div className="dotted-line"></div>
        </div>
    );
}

export default GraphicDesignProjectGallery;
