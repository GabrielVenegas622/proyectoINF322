import React from 'react'
import { Link } from 'react-router-dom';

import fwStands from '../assets/info.png'


export const HomePage = () => {
  return (
    <>
      <center>
        <h1 className='layout__title'>¿Cuándo se realiza?</h1>
        <div className="contenedorInfo">
            <div className="columnaInfo"><img src={fwStands} width={480} height={480} alt='ñau' style={{ borderRadius: '5px' }}/></div>
            <div className="columnaInfo">  
                <h2 style={{float:'left'}}>La feria de software se llevará desde el 4 hasta el 8 de Noviembre. Los prototipos estarán disponibles las 24hrs
                    durante la semana, no obstante, para comunicarse con los equipos respectivos y recibir una guía, el chat estará habilitado entre las 10:00hrs y las 16:00hrs.
                    <br></br>
                    <br></br>
                    Te recomendamos buscar un espacio tranquilo y disponer de una conexión a internet estable para poder disfrutar de el test de los prototipos!  </h2>
                {/* <h2 className='layout__subtitle'> probar todos los prototipos de sus aplicaciones!</h2> */}
                <Link to= "/page">
                    <button className='button-stand'> <h2>Visitar stands</h2></button>
                </Link>
            </div>
           
        </div>
        
      </center>
    </>
  )
}

export default HomePage

