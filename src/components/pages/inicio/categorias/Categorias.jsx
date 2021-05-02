import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './categorias.module.scss'

//Seccion categorias de la pagina de inicio
const Categorias = () => {
  return (
    <div className={styles.categorias}>

      <NavLink to='/catalogo' className={styles.category}>
        <img 
          src={require('../../../../img/categorias/pelucas.jpg').default} 
          alt="pelucas" 
        />

        <p>Pelucas</p>
      </NavLink>

      <NavLink to='/catalogo' className={styles.category}>
        <img 
          src={require('../../../../img/categorias/accesorios.jpg').default} 
          alt="accesorios" 
        />

        <p className={styles.accesorios}>Accesorios</p>
      </NavLink>

      <NavLink to='/catalogo' className={styles.category}>
        <img 
          src={require('../../../../img/categorias/lenceria.jpg').default} 
          alt="lenceria" 
        />

        <p>Lenceria</p>
      </NavLink>

    </div>
  )
}

export default Categorias
