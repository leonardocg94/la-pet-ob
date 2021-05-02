import React from 'react'
import styles from './contenedorProductos.module.scss'
import Producto from '../../../producto/Producto'

//Componente que muestra un conjunto de productos que son pasados como props
const ContenedorProductos = ({ productos }) => {

  //Variable que contiene los componentes producto a mostrar
  const productsItems = productos.map(producto => (
    <div key={producto.id} className={styles.productWrapper}>
      <Producto {...producto} />
    </div>
  ))

  return (
    <div className={styles.contenedorProductos}>
      {productsItems}
    </div>
  )
}

export default ContenedorProductos
