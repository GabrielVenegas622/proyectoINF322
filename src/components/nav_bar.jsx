import React from 'react'
import { NavLink } from 'react-router-dom'
import ImageFESW from '../assets/fesw80.png'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
        <a href='/' className="top-right-link">
          <img src={ImageFESW} alt="Feria de software" className="top-right-image"/>
        </a>
      <NavLink
        className={navLinkClass}
        to='/'
      >
        Inicio
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/page'
      >
        Stands
      </NavLink>

      <NavLink
        className={navLinkClass}
        to='/info'
      >
        Información
      </NavLink>
    </nav>
  )
}
 
export default NavBar
