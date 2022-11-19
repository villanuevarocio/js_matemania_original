import React from 'react'
import { Carrusel } from '../Carrusel/carrusel'
import { Confiar } from '../Confiar/Confiar'
import { Destacados } from '../Destacados/destacados'
import { FotProd } from '../Fot_prod/FotProd'


export const Inicio = () => {
  return (
    <>

      <Carrusel/> 
      <Destacados/>
      <Confiar/>
      <FotProd/>
    
    </>
  )
}