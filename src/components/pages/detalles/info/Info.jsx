import React, { useContext, useState, useEffect } from 'react'
import contextCarrito from '../../../../context/carrito/contextCarrito'
import styles from './info.module.scss'
import Button from '../../../button/Button'
import Message from '../../../message/Message'

const Info = ({ productoSeleccionado }) => {

  const { nombre, precio, caracteristicas } = productoSeleccionado
  const { material, tipo, descripcion, tamano, color, peinado } = caracteristicas

  const [show, setShow] = useState(false)

  const cContext = useContext(contextCarrito)
  const { addItem } = cContext

  useEffect(() => {
    let mounted = true
    if (show) {
      setTimeout(() => {
        if (mounted)
          setShow(false)
      }, 3000);
    }
    return () => {
      mounted = false
    }  
  }, [show])

  const addHandler = e => {
    e.preventDefault()
    let pro = {
      ...productoSeleccionado,
      cantidad: 1
    }
    addItem(pro)
    setShow(true)
  }

  return (
    <div className={styles.info}>
      {show ? <Message texto='Producto Agregado' tipo='success' /> : null}
      <h3 className={styles.nombre} >{nombre.replaceAll('-',' ')}</h3>
      <p className={styles.precio} >${precio}</p>
      <p className={styles.descripcion}>{descripcion}</p>
      <p>- {material}</p>
      <p>- {tipo}</p>
      <p>- {tamano}cm</p>
      <p>- {color.charAt(0).toUpperCase() + color.slice(1)}</p>
      <p>- {peinado.charAt(0).toUpperCase() + peinado.slice(1)}</p>
      <div className={styles.btnContainer}>
        <Button
          text='Agregar al carrito'
          route='#'
          color
          click={addHandler}
        />
      </div>
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
