import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer" id="contact">
            <div className="footer-container">
                <div className="content-up">
                    <div className="contact">
                        <h1 className="footer-title">Contacto</h1>
                        <p>5555555555 </p>
                        <p>Diner@gmail.com</p>
                    </div>
                    <div className="link">
                        <h1 className="footer-title">D&J Diner</h1>
                        <div className="links-icons">
                            <Link
                                className="icon"
                                to="https://www.facebook.com/profile.php?id=100085932051209"
                                target="blank"
                            >
                                <FaFacebookF />
                            </Link>
                            <Link className="icon" to="#">
                                <FaTiktok />
                            </Link>
                            <Link className="icon" to="#">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="content-down">
                    <p>
                        2023 <span>©</span>. Todos los Drechos Reservados
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
