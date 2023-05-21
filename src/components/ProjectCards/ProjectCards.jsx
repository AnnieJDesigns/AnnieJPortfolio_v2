import { Link } from "react-router-dom";
import "./ProjectCards.css";
import PopUp from "../PopUp/PopUp";
import { useState } from "react";

function ProjectCard(props) {
    const {projectData} = props;
    const [buttonPopUp, setButtonPopUp] = useState(false);
    return (
        <div className = "project-card">
            <img id="display-image" src={projectData.image}/>
                <div className = "project-card-wrapper">
                    <h6><b>{projectData.company}</b>, {projectData.year}</h6>
                    <h3>{projectData.title}</h3>
                    <h5>{projectData.type}</h5>
                    <p>{projectData.role}</p>
                    <p>{projectData.description}</p>
                        <div>
                            <button onClick={() => setButtonPopUp(true)} className="call-to-action-btn"><p>View {projectData.call_to_view}</p></button>
                        </div>
                        <div>
                            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                                <div className = "pop-up-body">
                                    <div className = "pop-up-header">
                                        <h2>{projectData.title}</h2>
                                    </div>
                                    <div>
                                    <br></br>
                                    <p>Brief: {projectData.brief}</p>
                                    <br></br>
                                    <p>Solution: {projectData.solution}</p>
                                    </div>
                                    <br></br>
                                    <h2>{projectData.image_title_1}</h2>
                                    <img id="pop-up-images" src={projectData.image_detail1}/>
                                    <br></br>
                                    <h2>{projectData.image_title_2}</h2>
                                    <img id="pop-up-images" src={projectData.image_detail2}/>
                                    <img id="pop-up-images" src={projectData.image_detail3}/>
                                </div>
                            </PopUp>
                        </div>
                </div>
        </div>
                

    );
}

export default ProjectCard;