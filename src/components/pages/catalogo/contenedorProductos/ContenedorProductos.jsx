import React from 'react'
import styles from './contenedorProductos.module.scss'
import Producto from '../../../producto/Producto'

const ContenedorProductos = ({ productos }) => {

  const { contenedorProductos, productWrapper } = styles

  return (
    <div className={contenedorProductos}>
      {productos.map(producto => (
        <div key={producto.id} className={productWrapper}>
          <Producto {...producto} />
        </div>
      ))}
    </div>
  )
}


export default ContenedorProductos
