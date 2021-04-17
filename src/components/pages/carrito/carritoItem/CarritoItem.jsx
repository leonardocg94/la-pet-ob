import React, { useContext } from 'react'
import contextCarrito from '../../../../context/carrito/contextCarrito'
import styles from './carritoItem.module.scss'

const CarritoItem = ({ id, cantidad, nombre, precio }) => {

  const cContext = useContext(contextCarrito)
  const { incrementItem, delItem, decrementItem } = cContext

  return (
    <div className={styles.carritoItem}>
      <p className={styles.nombre}>{nombre}</p>
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
  )
}

export default CarritoItem
