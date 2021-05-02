import React from 'react'
import styles from './menu.module.scss'
import { Link } from 'react-router-dom'

//componente con los links del menu principal, recibe el manejador de mostrar u ocultar menu
const Menu = ({ click }) => {

  return (
    <nav className={styles.menu}>

      <Link
        onClick={click}
        to='/catalogo/Pelucas'
        className={styles.menuItem}
      >
        Pelucas
      </Link>

      <Link 
        onClick={click} 
        to='/catalogo/Accesorios' 
        className={styles.menuItem}
      >
        Accesorios
      </Link>

      <Link 
        onClick={click} 
        to='/catalogo/Lenceria' 
        className={styles.menuItem}
      >
        Lenceria
      </Link>

    </nav>
  )
}

export default Menu
