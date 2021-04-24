import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import contextCarrito from '../../../../context/carrito/contextCarrito'
import styles from './carritoItem.module.scss'

const CarritoItem = ({ id, cantidad, nombre, precio, tipo }) => {

  const cContext = useContext(contextCarrito)
  const { incrementItem, delItem, decrementItem } = cContext

  return (
    <div className={styles.carritoItem}>
      <figure className={styles.image}>
        <img src={require(`../../../../img/${tipo}/${id}_${nombre}/1.jpg`).default} alt={`${nombre}`}/>
      </figure>
      <div className={styles.info}>
        <NavLink to={`/${tipo}/${id}`} className={styles.nombre}>{nombre}</NavLink>
        <div className={styles.controls}>
          <div className={styles.quantity}>
            <button onClick={() => decrementItem(id)} className={styles.down}>
              <i className="fas fa-minus"></i>
            </button>
            <span className={styles.cantidad}>{cantidad}</span>
            <button onClick={() => incrementItem(id)} className={styles.up}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <button onClick={() => delItem(id)} className={styles.eliminar}>
            <i className="fas fa-trash-alt"></i>
          </button>
          <p className={styles.precio}>${precio}</p>
        </div>
      </div>

    </div>
  )
}

export default CarritoItem
