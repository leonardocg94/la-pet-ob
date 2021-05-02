import React from 'react'
import styles from './colorFilter.module.scss'

//Filtro individual para la categoria de colores, recibe el color el valor del estado de filtros, y el manejador onchange
const ColorFilter = ({ color, val, getValue }) => {
  //estilos condicionales para el componente
  const sty = [styles.color, styles[color]].join(' ')

  return (
    <>
      <input 
        onChange={getValue} 
        className={styles.check}
        alue={color} 
        type='radio'
         name='Color' 
        id={color} 
        checked={color === val}
      />

      <label className={sty} htmlFor={color}></label>
    </>
  )
}

export default ColorFilter
