import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './info.module.scss'
import contextProductos from '../../../../context/productos/contextProductos'

const Info = () => {

  const refId = useParams().id

  const pContext = useContext(contextProductos)
  const { productoSeleccionado, selectProduct } = pContext
  

  useEffect(() => {
    
    selectProduct(refId)

    return () => {
      selectProduct(-1)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  //EL comentario al final del use efect elimina el warning de las dependencias faltantes en el arreglo de dependencias
  if (productoSeleccionado) {
    const { id, nombre, tipo, precio } = productoSeleccionado

    return (
      <div className={styles.info}>
        <p>{id}</p>
        <p>{nombre}</p>
        <p>{tipo}</p>
        <p>{precio}</p>
      </div>
    )
  } else {
    return null
  }
}

export default Info
