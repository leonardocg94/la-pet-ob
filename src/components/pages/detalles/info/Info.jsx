import React from 'react'
import styles from './info.module.scss'

const Info = ({ productoSeleccionado }) => {

  //EL comentario al final del use efect elimina el warning de las dependencias faltantes en el arreglo de dependencias

  const { nombre, precio, caracteristicas } = productoSeleccionado
  const { material, tipo, descripcion, tamano, color, peinado } = caracteristicas

  return (
    <div className={styles.info}>
      <h3 className={styles.nombre} >{nombre}</h3>
      <p className={styles.precio} >${precio}</p>
      <p className={styles.descripcion}>{descripcion}</p>
      <p>- {material}</p>
      <p>- {tipo}</p>
      <p>- {tamano}cm</p>
      <p>- {color}</p>
      <p>- {peinado}</p>
      <div className={styles.contacto}>
        <p className={styles.cont}>Contactanos!</p>
        <a
          rel='noreferrer'
          target='_blank'
          href="https://api.whatsapp.com/send?phone=525537295707"
          className={styles.whatsapp}
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          rel='noreferrer'
          target='_blank'
          href='http://m.me/LaPetiteObsession'
          className={styles.facebook}
        >
          <i className="fab fa-facebook-messenger"></i>
        </a>
      </div>
    </div>
  )
}

export default Info
