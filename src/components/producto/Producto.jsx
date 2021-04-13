import React, { useState } from 'react'
import styles from './producto.module.scss'
import Button from '../button/Button'

const Producto = ({ id, tipo, nombre, precio }) => {

  const [flip, setFlip] = useState(false)


  const flipHandler = () => {
    const auxFlip = !flip
    setFlip(auxFlip)
  }

  const detailsHandler = e => { e.stopPropagation() }

  const imagen = require(`../../img/${tipo}/${id}_${nombre}/1.jpg`).default
  return (
    <article onClick={flipHandler} className={styles.producto}>
      <div
        className={flip
          ? [styles.cardSide, styles.cardSideFront, styles.flipFront].join(' ')
          : [styles.cardSide, styles.cardSideFront].join(' ')
        }
      >
        <div className={styles.frontContent}>
          <img
            src={imagen}
            alt={nombre}
          />
        </div>
      </div>
      <div
        className={flip
          ? [styles.cardSide, styles.cardSideBack, styles.flipBack].join(' ')
          : [styles.cardSide, styles.cardSideBack].join(' ')
        }
      >
        <div className={styles.backContent}>
          <h3>{nombre.replaceAll('-', ' ')}</h3>
          <p>{`$${precio}`}</p>
          <div>
            <Button route={`/${tipo}/${id}`} click={detailsHandler} text='DETALLES' />
          </div>
        </div>
      </div>
    </article>
  )
}

export default Producto
