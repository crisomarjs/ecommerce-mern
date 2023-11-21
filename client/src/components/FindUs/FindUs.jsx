import "./FindUs.css";
import image from "../../assets/open.png";

const FindUs = () => {
    return (
        <div className="findus" id="findus">
            <div className="findus-container">
                <div className="fndus-content">
                    <h1>Encuentranos en </h1>
                    <p>Av 5 de mayo, Estado de México</p>
                    <h3>Abierto de </h3>
                    <p>Lunes - Sabado : 8:00 am - 8:00 pm</p>
                    <h3>Hora Feliz</h3>
                    <p>Jueves - Sabado: 8:00 pm - 2:00 am</p>
                </div>
                <div className="findus-img">
                    <img src={image} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default FindUs;
