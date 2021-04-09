import React from 'react'
import styles from './menu.module.scss'

const Menu = () => {
  
  return (
    <nav className={styles.menu}>
      <p className={styles.menuItem}>Pelucas</p>
      <p className={styles.menuItem}>Accesorios</p>
      <p className={styles.menuItem}>Lenceria</p>
    </nav>
  )
}

export default Menu
