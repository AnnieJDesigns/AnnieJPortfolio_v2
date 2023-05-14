import { Link } from "react-router-dom";
import "./ProjectCards.css"

function ProjectCard(props) {
    const {projectData} = props;
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
                        <p>{projectData.link}</p>
                        </div>
                </div>
                
        </div>
    );
}

export default ProjectCard;