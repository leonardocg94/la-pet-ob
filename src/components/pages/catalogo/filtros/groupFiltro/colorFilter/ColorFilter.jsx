import React from 'react'
import styles from './colorFilter.module.scss'

const ColorFilter = ({ color }) => {
  const sty = [styles.color, styles[color]].join(' ')

  return (
    <>
      <input className={styles.check} type='checkbox' name={color} id={color} />
      <label className={sty} htmlFor={color}></label>
    </>
  )
}

export default ColorFilter
