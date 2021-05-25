import React, { useContext } from 'react'
import styles from './menu.module.scss'
import { Link, useLocation } from 'react-router-dom'
import contextProductos from '../../context/productos/contextProductos'

//componente con los links del menu principal, recibe el manejador de mostrar u ocultar menu
const Menu = ({ click }) => {

  const location = useLocation()
  const pContext = useContext(contextProductos)
  const { fetchProductos } = pContext

  //En caso de que ya nos encontremos en la ruta seleccionada recargamos los productos iniciales
  const clickHandler = e => {
    if (location.pathname.includes(e.target.name))
      fetchProductos(e.target.name)
      click()
  }

  return (
    <nav className={styles.menu}>

      <Link
        onClick={clickHandler}
        to='/catalogo/peluca'
        className={styles.menuItem}
        name='peluca'
      >
        Pelucas
      </Link>

      <Link
        onClick={clickHandler}
        to='/catalogo/accesorio'
        className={styles.menuItem}
        name='accesorio'
      >
        Accesorios
      </Link>

      <Link
        onClick={clickHandler}
        to='/catalogo/lenceria'
        className={styles.menuItem}
        name='lenceria'
      >
        Lenceria
      </Link>

    </nav>
  )
}

export default Menu
