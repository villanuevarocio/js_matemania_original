import React from 'react'
import { Carrusel } from '../Carrusel/carrusel'
import { Confiar } from '../Confiar/Confiar'
import { Destacados } from '../Destacados/destacados'
import { Mate_Personalizado } from '../Mate_Personalizado/Mate_Personalizado'

export const Inicio = () => {
  return (
    <>

      <Carrusel/> 
      <br></br>
      <Destacados/>
      <Confiar/>
      <br></br>
      <Mate_Personalizado/>
    </>
  )
}