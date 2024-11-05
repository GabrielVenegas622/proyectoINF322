import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import ImagePage from '../pages/proyect_page'
import Stand from '../pages/stand'

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path="/page" element={<Stand />} />
            <Route path="/page/:imageId" element={<ImagePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
