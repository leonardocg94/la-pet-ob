import React from 'react'
import styles from './colorFilter.module.scss'

const ColorFilter = ({ color, val, getValue }) => {
  const sty = [styles.color, styles[color]].join(' ')

  return (
    <>
      <input onChange={getValue} className={styles.check} value={color} type='radio' name='Color' id={color} checked={color === val}/>
      <label className={sty} htmlFor={color}></label>
    </>
  )
}

export default ColorFilter
