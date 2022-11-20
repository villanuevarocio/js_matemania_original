import React from 'react'
import { data } from '../../data/productos'
import Cards2 from '../Cards2/Cards2'

export const Destacados = () => {
  return (
    <div className='container-fluid'>
    <div className='container py-4'>
      <div className='row'>
        {data.productos.map((item, index) => {
          if(index < 4){
            return (
                <Cards2 img={item.img} titulo={item.nombre} text={item.text} precio={item.precio} key={index} />
            ) 
          }
        })}
      </div>
    </div>
  </div>
    
  )
}