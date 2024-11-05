import React from 'react';
import { Link } from 'react-router-dom';
import feriaSoftware from '../assets/feria-software.jpeg';
import hasasExport from '../assets/hasas_export_co_ltd_cover.jpg';

const VideoRedirectButton = ({ videoIndex }) => {
    const linkTo = {
        1: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        2: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        3: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        4: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        5: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        6: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
    const images = {
        1: feriaSoftware,
        2: hasasExport,
        3: feriaSoftware,
        4: hasasExport,
        5: feriaSoftware,
        6: hasasExport
      };
    
    const linkVid = {
        1: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        2: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        3: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        4: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        5: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        6: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    };
    const text = {
        1: "Aplicación web para la gestión de tareas, que permite a los usuarios crear, editar y eliminar tareas, además de establecer recordatorios.",
        2: "Sistema de reservaciones de hotel en línea, que muestra disponibilidad en tiempo real y permite a los usuarios realizar reservas de manera sencilla.",
        3: "Plataforma de aprendizaje en línea que ofrece cursos interactivos y recursos educativos para estudiantes de diversas materias.",
        4: "Aplicación de seguimiento de hábitos que ayuda a los usuarios a establecer y mantener hábitos saludables mediante gráficos y estadísticas.",
        5: "Juego de trivia en línea que desafía a los jugadores con preguntas de diversas categorías y niveles de dificultad, con la opción de competir con amigos.",
        6: "Herramienta de análisis de datos que permite a las empresas visualizar y explorar sus datos a través de gráficos interactivos y reportes personalizados."
    };
    


    
    return (
    <div className="vertical-container">
        <div className="horizontal-container">

            <img src={images[num]} alt={altText} className="proyect-image" />
            <p className="proyect-text">{text[num]}</p>
        </div>
        <div className="horizontal-container">
            <div class="video-container">
                <iframe 
                    src={linkVid[num]}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
            <div className='button-container'>
                <Link to= "./proyect"> {/* Envolvemos la imagen en un Link */}
                <button > PROBAR APP</button>
                </Link>

                <VideoRedirectButton videoIndex={num} /> {/* Cambia el índice según el video que quieras redirigir */}
            </div>
        </div>
    
    </div>
 
    );
};

export default Img_text_card;
