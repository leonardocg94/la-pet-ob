import React from 'react'
import styles from './producto.module.scss'
import Button from '../button/Button'

const Producto = ({ id, tipo, nombre, precio }) => {
  console.log([id, tipo, nombre]);
  const imagen = require(`../../img/${tipo}/${id}_${nombre}/1.jpg`).default
  return (
    <article className={styles.producto}>
      <div className={[styles.cardSide, styles.cardSideFront].join(' ')}>
        <div className={styles.frontContent}>
          <img
            src={imagen}
            alt={nombre}
          />
        </div>
      </div>
      <div className={[styles.cardSide, styles.cardSideBack].join(' ')}>
        <div className={styles.backContent}>
          <h3>{nombre.replaceAll('-', ' ')}</h3>
          <p>{`$${precio}`}</p>
          <div>
            <Button text='DETALLES'/>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Producto
