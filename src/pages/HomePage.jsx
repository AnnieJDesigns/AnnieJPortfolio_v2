import CodingProjectGallery from "../components/CodingProjectGallery copy/CodingProjectGallery";
import GraphicDesignProjectGallery from "../components/GraphicDesignProjectGallery/GraphicDesignProjectGallery";
import Header from "../components/Header/Header";

function HomePage() {
    return (

        <div>
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
                <p>Linkedin</p>
            </section>
        </div>
        
    ) 
    
};

export default HomePage;
