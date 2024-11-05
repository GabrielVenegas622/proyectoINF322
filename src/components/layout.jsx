import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import ImagePage from '../pages/proyect_page'
import Stand from '../pages/stand'
import Trial from '../pages/trial'

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <center><h1 className='layout__title'>Bienvenido!</h1></center>
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path="/page" element={<Stand />} />
            <Route path="/page/:imageId" element={<ImagePage />} />
            <Route path="/page/:imageId/trial" element={<Trial />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
