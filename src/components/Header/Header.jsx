import './Header.css'

function Header () {
    return (
        <div>
            <div className="header">
            <div className="image">
                <img className= "display-image" src="https://via.placeholder.com/100x100"/>
            </div>
                <div className="about-me">
                    <h3>Annie Jiang</h3>
                    <h6>Software, Designer, Dog-mum</h6>
                    <h6>On a mission</h6>
                </div>
            </div>
        </div>
    )

}

export default Header;