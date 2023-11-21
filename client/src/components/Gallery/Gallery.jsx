import "./Gallery.css";
import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import mozzaClassic from "../../assets/mozzaclassic.jpg";
import buffaloWings from "../../assets/BUFFALOWINGS.jpg";
import sisig from "../../assets/SISIG.jpg";
import spaghetti from "../../assets/SPAGHETTI2.jpg";
import mangoGraham from "../../assets/MANGO GRAHAM.jpg";
import taro from "../../assets/TARO.jpg";
import chicksilog from "../../assets/CHICKSILOG.jpg";
import wintermelon from "../../assets/WINTERMELON.jpg";

const Gallery = () => {
    const scrollRef = React.useRef(null);

    const images = [
        mozzaClassic,
        buffaloWings,
        sisig,
        spaghetti,
        mangoGraham,
        taro,
        chicksilog,
        wintermelon,
    ];

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === "left") {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };

    return (
        <div className="gallery" id="gallery">
            <div className="gallery-container">
                {}
                <div className="content">
                    <h1>Galeria</h1>
                    <p>
                        
                        Pruebe lo que hay en el menú de D&J Diner con nuestra 
                        galería de fotos. Desde nuestro clásico plato de mozza 
                        hasta las irresistibles Buffalo Wings, tenemos algo para 
                        todos los gustos. Satisface tus antojos con nuestro 
                        exclusivo Sisig o disfruta de los reconfortantes sabores 
                        de nuestros Spaghetti caseros. Deléitese con un dulce capricho
                         con nuestras bebidas de Mango Graham o Taro, o comience el día 
                         con un delicioso Chicksilog o Wintermelon. Cada plato se prepara
                          con cuidado y se elabora con los ingredientes más frescos. 
                          Explore nuestra galería y compruebe usted mismo por qué 
                          D&J Diner es un destino gastronómico popular.
                    </p>
                </div>
                {}
                <div className="gallery-images">
                    <div className="galley-images-container" ref={scrollRef}>
                        {images.map((image, index) => {
                            return (
                                <div
                                    className="images-gallery-card"
                                    key={`gallery-image-${index + 1}`}
                                >
                                    <img src={image} alt="gallery" />
                                </div>
                            );
                        })}
                    </div>
                    {}
                    <div className="gallery-images-arrows">
                        <BsArrowLeftShort
                            className="gallery-arrow-icon"
                            onClick={() => scroll("left")}
                        />
                        <BsArrowRightShort
                            className="gallery-arrow-icon"
                            onClick={() => scroll("right")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
