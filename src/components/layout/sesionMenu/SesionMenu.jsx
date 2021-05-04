import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './sesionMenu.module.scss'

//componente sesion de menu, recibe el manejador de su ocultamiento y despliege
const SesionMenu = ({ setShow }) => {

  //manejador de cerrar sesion
  const endSession = () => {
    localStorage.removeItem('authPetOb')
    setShow(false)
  }

  //contenido del componente dependiendo si hay una sesion iniciada
  const content = localStorage.getItem('authPetOb')
    ?
    <>
      <NavLink to='/' className={styles.link}>Perfil</NavLink>
      <NavLink to='/' className={styles.link}>Compras</NavLink>
      <NavLink
        to='/'
        onClick={endSession}
        className={styles.link}
      >Cerrar sesión</NavLink>
    </>
    :
    <>
      <NavLink
        to='/sesion'
        className={styles.link}
        onClick={() => setShow(false)}>Iniciar Sesion</NavLink>
      <NavLink
        to='/registro'
        className={styles.link}
        onClick={() => setShow(false)}>Registrarse</NavLink>
    </>

  return (
    <div className={styles.sesionMenu}>
      {content}
    </div>
  )

}

export default SesionMenu
