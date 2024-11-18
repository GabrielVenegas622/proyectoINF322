import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import ImagePage from '../pages/proyect_page'
import ImageFESW from '../assets/fsw160.png'
import Stand from '../pages/stand'
import Trial from '../pages/trial'
import Info from '../pages/info_page'

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <a href='/' className="top-right-link">
          <img src={ImageFESW} alt="Imagen en esquina" className="top-right-image"/>
        </a>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path="/page" element={<Stand />} />
            <Route path="/info" element={<Info />} />
            <Route path="/page/:imageId" element={<ImagePage />} />
            <Route path="/page/:imageId/trial" element={<Trial />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
