import './About.css'
import image from '../../assets/laspatatas.jpg'
const About = () => {
    return (
        //////////////////////////// ABOUT PAGE
        <div className="about" id='about'>
            {/********************** ABOUT CONTAINER */}
            <div className="about-container">
            {/********************** ABOUT US */}
                <div className="about-us">
                    
                </div>
        {/********************** ABOUT IMAGE */}
                <div className="img">
                    <img src={image} alt="" />
                </div>
        {/********************** ABOUT HISTORY */}
                <div className="history">
                    
                </div>
            </div>
        </div>
    );
}
 
export default About;