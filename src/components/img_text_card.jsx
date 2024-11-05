import React from 'react';
import { Link } from 'react-router-dom';

import IATU from '../assets/IATU.png'
import DialogApp from '../assets/DialogApp.png'
import Canaria from '../assets/canaria.png'
import GeoTMM from '../assets/GeoTMM.png'
import QAGuarIAn from '../assets/qaguardian.png';
import MineGuard from '../assets/mineguard.png';

const VideoRedirectButton = ({ videoIndex }) => {
    const linkTo = {
        1: "https://iatu.feriadesoftware.cl/",
        2: "https://DialogApp.feriadesoftware.cl/",
        3: "https://canaria.feriadesoftware.cl/",
        4: "https://geotmm.feriadesoftware.cl/",
        5: "https://qa-guardian.feriadesoftware.cl/",
        6: "https://mineguard.feriadesoftware.cl/"
    };

    const handleClick = () => {
        const url = linkTo[videoIndex]; // Obtiene la URL correspondiente al índice
        if (url) {
            window.location.href = url; // Redirige a la URL
        } else {
            console.error('URL no válida para el índice:', videoIndex);
        }
    };

    return (
        <button onClick={handleClick}>MÁS INFO</button>
    );
};

const Img_text_card = ({ num, altText}) => {
    const names = {
        1: "IATU",
        2: "DialogApp",
        3: "Canaria",
        4: "GeoTMM",
        5: "QAGuarIAn",
        6: "MineGuard"
    }
    const images = {
        1: IATU,
        2: DialogApp,
        3: Canaria,
        4: GeoTMM,
        5: QAGuarIAn,
        6: MineGuard
      };
    
    const linkVid = {
        1: "https://www.youtube.com/embed/z-TJL4zm1Oc",
        2: "https://www.youtube.com/embed/TigjN-ZZWqk",
        3: "https://www.youtube.com/embed/Ywz6RGaL2d0",
        4: "https://www.youtube.com/embed/vve1Xwu3Ge8",
        5: "https://www.youtube.com/embed/l-xAQsYhBhY",
        6: "https://www.youtube.com/embed/xAZMCZHOdJ8"
    };
    const text = {
        1: "IATU es una IA que analiza videos de pruebas de usuarios para mejorar la usabilidad y accesibilidad de sitios web, brindando recomendaciones específicas para asegurar una experiencia óptima",
        2: "DialogApp es una innovadora aplicación móvil dirigida a la población sorda en Chile y al personal médico, que busca eliminar la dependencia de intérpretes en citas médicas, garantizando privacidad e inclusión. Utilizando inteligencia artificial y visión por computadora, ofrece traducción en tiempo real entre Lengua de Señas Chilena (LSCh) y español, promoviendo la autonomía en la comunicación. Su enfoque bidireccional y especializado en el ámbito médico la hace única, facilitando una comunicación eficiente y fluida para personas sordas en el sector salud.",
        3: "CanarIA es un software basado en inteligencia artificial que ayuda a medir la efectividad de medidas de mitigación para el control de polvo en mineras, además de levantar alertas, enviar notificaciones y generar métricas para futuro uso de los encargados. Esto lo logra a través de la detección de polvo utilizando redes neuronales.",
        4: "GeoTMM es una aplicación innovadora que busca optimizar el uso de datos GPS mediante la asignación precisa de rutas a calles. La plataforma está diseñada para aquellos que necesitan hacer un seguimiento detallado de desplazamientos y obtener datos precisos sobre rutas recorridas, tanto en entornos urbanos como rurales",
        5: "QAGuardian, desarrollado por Pandev, es una solución innovadora para automatizar la revisión de ventas telefónicas. Diseñado para mejorar la eficiencia y precisión en la revisión, QAGuardian se adapta a las normativas chilenas y las necesidades del mercado local, ayudando a las empresas a optimizar sus procesos y mantener altos estándares de calidad.",
        6: "Utiliza MineGuard para gestionar el uso y ubicación de camiones mineros. Entregando datos y estadísticas en tiempo real, útiles para el correcto funcionamiento de éstos."
    };
    


    
    return (
    <div className="vertical-container">
        <div className="horizontal-container">
        <img src={images[num]} alt={altText} className="proyect-image" style={{marginRight: '50px'}}/> 
        <h1 className='layout__title'>{names[num]}</h1>
        </div>
        <div className="horizontal-container" style={{gap: '50px'}}>
            <div class="video-container">
                <iframe 
                    src={linkVid[num]}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
            <p className="proyect-text">{text[num]}</p>
        </div>
    <center>
        <div className='horizontal-container' >
            <div className='button-container'>
                <Link to= "./trial"> {/* Envolvemos la imagen en un Link */}
                <button > PROBAR APP</button>
                </Link>

                <VideoRedirectButton videoIndex={num} /> {/* Cambia el índice según el video que quieras redirigir */}
            </div>
        </div>
    </center>
    
    
    </div>
 
    );
};

export default Img_text_card;
