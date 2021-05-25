import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './categorias.module.scss'

//Seccion categorias de la pagina de inicio
const Categorias = () => {

  return (
    <div className={styles.categorias}>

      <NavLink 
        to='/catalogo/Pelucas' 
        className={styles.category}
      >
        <img
          src={process.env.REACT_APP_BK_HOST+'/resources/img/categorias/pelucas.jpg'}
          alt="pelucas"
        />

        <p>Pelucas</p>
      </NavLink>

      <NavLink 
        to='/catalogo/Accesorios' 
        className={styles.category}
      >
        <img
          src={process.env.REACT_APP_BK_HOST+'/resources/img/categorias/accesorios.jpg'}
          alt="accesorios"
        />

        <p className={styles.accesorios}>Accesorios</p>
      </NavLink>

      <NavLink 
        to='/catalogo/Lenceria' 
        className={styles.category}
      >
        <img
          src={process.env.REACT_APP_BK_HOST+'/resources/img/categorias/lenceria.jpg'}
          alt="lenceria"
        />

        <p>Lenceria</p>
      </NavLink>

    </div>
  )
}

export default Categorias
