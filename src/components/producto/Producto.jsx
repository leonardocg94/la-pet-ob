import React from 'react'
import styles from './producto.module.scss'

const Producto = ({ tipo, nombre, precio }) => {
  return (
    <article className={styles.producto}>
      <figure className={styles.imagen}>
        <img
          src={require(`../../img/${tipo}/${nombre}.jpg`).default}
          alt={`Producto: ${nombre}`}
        />
      </figure>
      <div className={styles.info}>
        <p className={styles.nombre}>{nombre.replace("_", " ")}</p>
        <p className={styles.precio}>{precio}</p>
      </div>
      
    </article>
  )
}

export default Producto
