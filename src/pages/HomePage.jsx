import CodingProjectGallery from "../components/CodingProjectGallery copy/CodingProjectGallery";
import GraphicDesignProjectGallery from "../components/GraphicDesignProjectGallery/GraphicDesignProjectGallery";
import Header from "../components/Header/Header";

function HomePage() {
    return (

        <div className="html">
                <Header />
                <div className ="quote">
                    <p>The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela</p>
                </div>
                <div>
                    <CodingProjectGallery />
                </div>
                <div>
                    <GraphicDesignProjectGallery />
                </div>
                <section>
                    <div className="title">
                        <h2>Connect with me</h2>
                    </div>
                    <a href="https://www.linkedin.com/in/annijix/" rel="noreferrer">
                        <button className="call-to-action-btn"><p>Linkedin</p></button>
                    </a>
                </section>
        </div>
        
    ) 
    
};

export default HomePage;
