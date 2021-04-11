import React from 'react'
import styles from './menu.module.scss'
import { NavLink } from 'react-router-dom'

const Menu = ({ click }) => {

  return (
    <nav className={styles.menu}>
      <NavLink onClick={click} to='/catalogo' className={styles.menuItem}>
        Pelucas
      </NavLink>
      <NavLink onClick={click} to='/catalogo' className={styles.menuItem}>
        Accesorios
      </NavLink>
      <NavLink onClick={click} to='/catalogo' className={styles.menuItem}>
        Lenceria
      </NavLink>
    </nav>
  )
}

export default Menu
