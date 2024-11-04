import React from 'react';
import { Link } from 'react-router-dom';

const Img_text_card = ({ imageSrc, altText, text, linkTo }) => {
    return (
        <div className="vertical-container">
            <Link to={linkTo}> {/* Envolvemos la imagen en un Link */}
                <img src={imageSrc} alt={altText} className="vertical-image" />
            </Link>
            <p className="vertical-text">{text}</p>
        </div>
    );
};

export default Img_text_card;
