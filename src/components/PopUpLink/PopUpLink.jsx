function PopUpLink(props) {
    const {projectData} = props;
    return (
        <div>
             <img id="display-image" src={projectData.image}/>
        </div>
    );
}

export default PopUpLink;


