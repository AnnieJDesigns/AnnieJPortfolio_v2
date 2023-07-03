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
                    <h6>{projectData.company}, {projectData.year}</h6>
                    <h3>{projectData.title}</h3>
                    <h6>{projectData.type}</h6>
                    <h6>{projectData.role}</h6>
                    <div className="gap"></div>
                    <p>{projectData.description}</p>
                    <div className="gap"></div>
                        <div>
                            <button onClick={() => setButtonPopUp(true)} className="call-to-action-btn"><p>View more</p></button>
                        </div>
                        <div>
                            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                                <div className = "pop-up-body">
                                    <div className = "pop-up-header">
                                        <h2>{projectData.title}</h2>
                                    </div>
                                    <br></br>
                                    <div className ="pop-up-prefix">
                                        <div className ="pop-up-prefix-inner">
                                            <h6>{projectData.company}, {projectData.year}</h6>
                                            <h6>{projectData.type}</h6>
                                        </div>
                                        <div className ="pop-up-prefix-CTA">
                                            <a href={projectData.viewing_link1} className="call-to-action-btn" rel="noreferrer"><p>{projectData.call_to_view_pop_up1}</p></a>
                                            <a href={projectData.viewing_link2} className="call-to-action-btn" rel="noreferrer"><p>{projectData.call_to_view_pop_up2}</p></a>
                                        </div>
                                    </div>
                                    <div className="gap"></div>
                                    <div>
                                        <h5>Brief:</h5><p>{projectData.brief}</p>
                                        <div className="gap"></div>
                                        <h5>Solution:</h5><p>{projectData.solution}</p>
                                    </div>
                                    <br></br>
                                    <div className="pop-up-wrapper">
                                            <div className="pop-up-container">
                                                    <div className="pop-up-inner">
                                                        <div className="pop-up-inner-content">
                                                            <h3>{projectData.image_title_1}</h3>
                                                            <img id="pop-up-images" src={projectData.image_detail1a}/>
                                                        </div>
                                                    </div>
                                                <br></br>
                                                    <div className="pop-up-inner">
                                                        <div className="pop-up-inner-content">
                                                            <h3>{projectData.image_title_2}</h3>
                                                            <img id="pop-up-images" src={projectData.image_detail2a}/>
                                                            <img id="pop-up-images" src={projectData.image_detail2b}/>
                                                        </div>
                                                    </div>
                                                    <br></br>
                                                    <div className="pop-up-inner">
                                                        <div className="pop-up-inner-content">
                                                            <h3>{projectData.image_title_3}</h3>
                                                            <img id="pop-up-images" src={projectData.image_detail3a}/>
                                                            <img id="pop-up-images" src={projectData.image_detail3b}/>
                                                        </div>
                                                    </div>
                                                    <br></br>
                                                    <div className="pop-up-inner">
                                                        <div className="pop-up-inner-content">
                                                            <h3>{projectData.image_title_4}</h3>
                                                            <img id="pop-up-images" src={projectData.image_detail4a}/>
                                                            <img id="pop-up-images" src={projectData.image_detail4b}/>
                                                        </div>
                                                    </div>
                                                    <br></br>
                                                    <div className="pop-up-inner">
                                                        <div className="pop-up-inner-content">
                                                            <h3>{projectData.image_title_5}</h3>
                                                            <img id="pop-up-images" src={projectData.image_detail5a}/>
                                                            <img id="pop-up-images" src={projectData.image_detail5b}/>
                                                        </div>
                                                    </div>
                                                    <br></br>
                                                    <div className="pop-up-inner">
                                                        <div className="pop-up-inner-content">
                                                            <h3>{projectData.image_title_6}</h3>
                                                            <img id="pop-up-images" src={projectData.image_detail6a}/>
                                                            <img id="pop-up-images" src={projectData.image_detail6b}/>
                                                        </div>
                                                    </div>
                                            </div>
                                    </div>
                                </div>
                            </PopUp>
                        </div>
                </div>
        </div>
                

    );
}

export default ProjectCard;