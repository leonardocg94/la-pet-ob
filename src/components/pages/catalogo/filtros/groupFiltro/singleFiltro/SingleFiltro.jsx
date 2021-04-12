import React from 'react'
import styles from './singleFiltro.module.scss'


const SingleFiltro = ({id, nombre}) => {

  const {singleFiltro, label, figure, rInput} = styles

  return (
    <div className={singleFiltro}>
      <label className={label} htmlFor={id}>{nombre}</label>
      <input className={rInput} type="checkbox" id={id}/>
      <span className={figure}></span>
    </div>
  )
}

export default SingleFiltro
