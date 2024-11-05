// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

import IATU from '../assets/IATU.png'
import DialogApp from '../assets/DialogApp.png'
import Canaria from '../assets/canaria.png'
import GeoTMM from '../assets/GeoTMM.png'
import QAGuarIAn from '../assets/qaguardian.png';
import MineGuard from '../assets/mineguard.png';



function stand() {
  return (
    <div className='stand-page'>
      <div className="grid-wrapper">
        <div className="image-grid">
          <div className="grid-item">
          <Link to="/page/1">
            <img src= {IATU} alt="Image 1" />
          </Link>
          <p className="image-name">IATU</p>
          </div>
          <div className="grid-item">
          <Link to="/page/2">
            <img src= {DialogApp} alt="Image 1" />
          </Link>
          <p className="image-name"> DialogApp</p>
          </div>
          <div className="grid-item">
          <Link to="/page/3">
            <img src= {Canaria} alt="Image 1" />
          </Link>
          <p className="image-name">Canaria</p>
          </div>
          <div className="grid-item">
          <Link to="/page/4">
            <img src= {GeoTMM} alt="Image 1" />
          </Link>
          <p className="image-name">GeoTMM</p>
          </div>
          <div className="grid-item">
          <Link to="/page/5">
            <img src= {QAGuarIAn} alt="Image 1" />
          </Link>
          <p className="image-name">QAGuarIAn</p>
          </div>
          <div className="grid-item">
          <Link to="/page/6">
            <img src= {MineGuard} alt="Image 1" />
          </Link>
          <p className="image-name">MineGuard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default stand;

