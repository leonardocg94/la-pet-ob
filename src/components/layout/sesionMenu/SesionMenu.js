import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import contextUsuario from '../../../context/usuario/contextUsuario'
import styles from './sesionMenu.module.scss'

const SesionMenu = ({setShow}) => {

  const uContext = useContext(contextUsuario)
  const { loged } = uContext



  if (loged) {
    return (
      <div className={styles.sesionMenu}>
        <NavLink to='/' className={styles.link}>Perfil</NavLink>
        <NavLink to='/' className={styles.link}>Compras</NavLink>
      </div>
    )
  } else {
    return (
      <div className={styles.sesionMenu}>
        <NavLink
          to='/'
          className={styles.link}
          onClick={() => setShow(false)}>Iniciar Sesion</NavLink>
        <NavLink
          to='/registro'
          className={styles.link}
          onClick={() => setShow(false)}>Registrarse</NavLink>
      </div>
    )
  }
}

export default SesionMenu
