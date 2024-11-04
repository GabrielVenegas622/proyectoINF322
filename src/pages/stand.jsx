// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

import fwStands from '../assets/feria-software.jpeg'
import pist from '../assets/hasas_export_co_ltd_cover.jpg'

function stand() {
  return (
    <div className='stand-page'>
      <div className="grid-wrapper">
        <div className="image-grid">
          <Link to="/page/1">
            <img src= {fwStands} alt="Image 1" />
          </Link>
          <Link to="/page/2">
            <img src={pist} alt="Image 2" />
          </Link>
          <Link to="/page/3">
            <img src={fwStands} alt="Image 3" />
          </Link>
          <Link to="/page/4">
            <img src={pist} alt="Image 4" />
          </Link>
          <Link to="/page/5">
            <img src={fwStands} alt="Image 5" />
          </Link>
          <Link to="/page/6">
            <img src={pist} alt="Image 6" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default stand;

