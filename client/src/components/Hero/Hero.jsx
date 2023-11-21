import "./Hero.css";
import image from "../../assets/quezzomozzaclassic.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        //////////////////////////// HERO PAGE
        <div className="hero" id="home">
            {/************************* HERO CONTAINER */}
            <div className="hero-container">
                {/************************* HERO CONTENT */}
                <div className="hero-content">
                    <h1>Descubra el placer de comer en D&J Diner</h1>
                    <i>
                        Bienvenido a D&J Diner, donde cada comida es una celebración 
                        de sabores reconfortantes y satisfactorios. Nuestro menú está 
                        repleto de platos clásicos elaborados con amor y los ingredientes 
                        más frescos. Ya sea que esté de humor para un abundante desayuno, 
                        un delicioso almuerzo o una reconfortante cena, tenemos algo para 
                        todos. Así que siéntate, relájate y déjanos encargarnos de cocinar. 
                        ¡Esperamos poder servirle!
                    </i>
                    <Link to="/products" className="btn">
                        Explorar Menu
                    </Link>
                </div>
                {/************************* HERO IMAGE */}
                <div className="hero-img">
                    <img src={image} alt="mozzaclassic" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
