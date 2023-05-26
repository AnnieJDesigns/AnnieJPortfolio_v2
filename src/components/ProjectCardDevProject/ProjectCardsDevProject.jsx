import { Link } from "react-router-dom";
import '../ProjectCards/ProjectCards.css';

import { useState } from "react";

function ProjectCardsDevProject(props) {
    const {projectData} = props;
    const [buttonPopUp, setButtonPopUp] = useState(false);
    return (
        <div className = "project-card">
            <img id="display-image" src={projectData.image}/>
                <div className = "project-card-wrapper">
                    <h6><b>{projectData.company}</b>, {projectData.year}</h6>
                    <h3>{projectData.title}</h3>
                    <h6>{projectData.role}</h6>
                    <h6>{projectData.languages}</h6>
                    <div className="gap"></div>
                    <p>{projectData.description}</p>
                    <div className="gap"></div>
                        <div>
                            <a href={projectData.link_1} className="call-to-action-btn" rel="noreferrer"><p>{projectData.title_link_1}</p></a>
                            <a href={projectData.link_2} className="call-to-action-btn" rel="noreferrer"><p>{projectData.title_link_2}</p></a>
                            <a href={projectData.link_3} className="call-to-action-btn" rel="noreferrer"><p>{projectData.title_link_3}</p></a>
                        </div>
                </div>
        </div>

    );
}

export default ProjectCardsDevProject;