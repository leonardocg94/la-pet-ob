import React from 'react'
import styles from './singleFiltro.module.scss'

//Componente filtro individual que recibe el id para, nombre, valor del estado de filtros, y el manejador onChange
const SingleFiltro = ({ id, nombre, val, getValue }) => {

  return (
    <div className={styles.singleFiltro}>

      <label className={styles.label} htmlFor={nombre}>{nombre}</label>

      <input 
        onChange={getValue} 
        className={styles.rInput} 
        name={id} 
        type="radio" 
        id={nombre} 
        value={nombre} 
        checked={nombre === val} 
      />

      <span className={styles.figure}></span>

    </div>
  )
}

export default SingleFiltro
