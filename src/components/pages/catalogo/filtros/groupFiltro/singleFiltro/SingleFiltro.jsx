import React from 'react'
import styles from './singleFiltro.module.scss'


const SingleFiltro = ({ id, nombre, val }) => {

  const { singleFiltro, label, figure, rInput } = styles

  return (
    <div className={singleFiltro}>
      <label className={label} htmlFor={nombre}>{nombre}</label>
      <input className={rInput} name={id} type="radio" id={nombre} value={nombre} checked={nombre === val} />
      <span className={figure}></span>
    </div>
  )
}

export default SingleFiltro
