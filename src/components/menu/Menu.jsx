import React from 'react'
import styles from './menu.module.scss'
import { Link } from 'react-router-dom'

const Menu = ({ click }) => {

  return (
    <nav className={styles.menu}>
      <Link onClick={click} to='/catalogo' className={styles.menuItem}>
        Pelucas
      </Link>
      <Link onClick={click} to='/catalogo' className={styles.menuItem}>
        Accesorios
      </Link>
      <Link onClick={click} to='/catalogo' className={styles.menuItem}>
        Lenceria
      </Link>
    </nav>
  )
}

export default Menu
