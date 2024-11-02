import React from 'react'

import fwStands from '../assets/feria-software.jpeg'


export const HomePage = () => {
  return (
    <>
      <center><img src={fwStands} width={800} height={450} alt='feria de software' style={{ borderRadius: '15px' }}/></center>
      <p>¡Te damos la bienvenida a la Interfaz energética!</p>
      <p>En esta página encontraras una 💡 ampolleta que podrás encender y apagar con un botón</p>
    </>
  )
}

export default HomePage
