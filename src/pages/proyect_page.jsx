// components/proyect_page.js
import React from 'react';
import { useParams } from 'react-router-dom';

import ImgText from '../components/img_text_card.jsx'

function Proyect_page() {
  const { imageId } = useParams();
  const num = parseInt(imageId, 10); // Convertir a número
  // Mapear el ID a una imagen específica usando las importaciones

  return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <ImgText 
                num={num} // Ruta a tu imagen
                altText={`Image ${num}`}
            />
            </div>
  );
}

export default Proyect_page;
