import React from 'react'

import fwStands from '../assets/feria-software.jpeg'


export const HomePage = () => {
  return (
    <>
      <center>
        <h1 className='layout__title'>Bienvenido!</h1>
        <img src={fwStands} width={800} height={450} alt='feria de software' style={{ borderRadius: '15px' }}/>
        <h2 className='layout__subtitle'>Podrás explorar la feria de software USM y </h2>
        <h2 className='layout__subtitle'> probar todos los prototipos de sus aplicaciones!</h2>
      </center>
    </>
  )
}

export default HomePage
