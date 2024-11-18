import React from 'react'
import { Link } from 'react-router-dom';

import fwStands from '../assets/feria-software.jpeg'


export const HomePage = () => {
  return (
    <>
      <center>
        <h1 className='layout__title'>Bienvenido!</h1>
        <img src={fwStands} width={800} height={450} alt='feria de software' style={{ borderRadius: '15px' }}/>
        <h2 className='layout__subtitle'>Podrás explorar la feria de software USM  </h2>
        <h3 className= "layout__mid-text">
          Viernes 15 de Noviembre  11:30 a 17:00 hrs <br />
          Campus San Joaquín USM <br />
        </h3>
        <h3 className="layout__text">
          Av. Vicuña Mackenna 3939, Santiago <br />
          Metro Camino Agrícola
        </h3>

        <Link to= "./page">
          <button className='button-stand'> <h2>Visitar stands</h2></button>
        </Link>
      </center>
    </>
  )
}

export default HomePage
