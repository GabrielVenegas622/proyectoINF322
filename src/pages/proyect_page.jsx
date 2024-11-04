// components/proyect_page.js
import React from 'react';
import { useParams } from 'react-router-dom';

import ImgText from '../components/img_text_card.jsx'

import feriaSoftware from '../assets/feria-software.jpeg';
import hasasExport from '../assets/hasas_export_co_ltd_cover.jpg';

function Proyect_page() {
  const { imageId } = useParams();

  // Mapear el ID a una imagen específica usando las importaciones
  const images = {
    1: feriaSoftware,
    2: hasasExport,
    3: feriaSoftware,
    4: hasasExport,
    5: feriaSoftware,
    6: hasasExport
  };

  return (

         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h1>Bienvenido a la Página de Inicio</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <ImgText 
                imageSrc={images[imageId]} // Ruta a tu imagen
                altText={`Image ${imageId}`}
                text="esta es la descripción del proyecto que vamos a utilizar."
                linkTo={"/"}  /* agregar link correspondiente a la pagina web a usar */
            />
            </div>
            {/* Puedes agregar más componentes o contenido aquí */}
        </div>
  );
}

export default Proyect_page;
