// components/proyect_page.js
import React from 'react';
import { useParams } from 'react-router-dom';

import feriaSoftware from '../assets/feria-software.jpeg';
import hasasExport from '../assets/hasas_export_co_ltd_cover.jpg';

function Proyect_page() {
  const { imageId } = useParams();

  // Mapear el ID a una imagen específica usando las importaciones
  const images = {
    1: feriaSoftware,
    2: hasasExport,
    3: feriaSoftware,
    4: hasasExport
  };

  return (
    <div className="image-page">
      <img src={images[imageId]} alt={`Image ${imageId}`} />
    </div>
  );
}

export default Proyect_page;
