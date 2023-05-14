import './Header.css'

function Header () {
    return (
        <div>
            <div className="header">
            <div className="image">
                <img className= "display-image" src="https://via.placeholder.com/100x100"/>
            </div>
                <div className="about-me">
                    <h4>Annie Jiang</h4>
                    <h5>Software, Designer, Dog-mum</h5>
                    <div className="gap"></div>
                    <h5>On a mission</h5>
                </div>
            </div>
        </div>
    )

}

export default Header;