import React, { useState } from 'react'
import styles from './producto.module.scss'
import Button from '../button/Button'

//Componente que representa un producto, recibiendo todos sus datos
const Producto = ({ id, tipo, nombre, precio }) => {
  //Estado que maneja si la card de un producto esta volteada o no
  const [flip, setFlip] = useState(false)

  //Manejador del volteo de la card de los productos
  const flipHandler = () => {
    const auxFlip = !flip
    setFlip(auxFlip)
  }

  //Funcion que detiene la propagacion de eventos del boton detalles
  const detailsHandler = e => { e.stopPropagation() }

  //Variable que contiene la importacion de la imagen del producto
  const imagen = require(`../../img/${tipo}/${id}_${nombre}/1.jpg`).default

  //Variables de los estilos condicionales de el frontside y backside de las cards
  let frontClasses
  let backClasses
  if (flip) {
    frontClasses = [styles.cardSide, styles.cardSideFront, styles.flipFront].join(' ')
    backClasses = [styles.cardSide, styles.cardSideBack, styles.flipBack].join(' ')
  } else {
    frontClasses = [styles.cardSide, styles.cardSideFront].join(' ')
    backClasses = [styles.cardSide, styles.cardSideBack].join(' ')
  }

  return (
    <article onClick={flipHandler} className={styles.producto}>

      <div className={frontClasses}>
        <div className={styles.frontContent}>
          <img src={imagen} alt={nombre}/>
        </div>
      </div>

      <div className={backClasses}>
        <div className={styles.backContent}>
          
          <h3>{nombre.replaceAll('-', ' ')}</h3>

          <p>{`$${precio}`}</p>

          <div className={styles.buttonContainer}>
            <Button 
              route={`/${tipo}/${id}`} 
              click={detailsHandler} 
              text='DETALLES' 
            />
          </div>

        </div>
      </div>
    </article>
  )
}

export default Producto
