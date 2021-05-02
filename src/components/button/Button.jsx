import React from 'react'
import styles from './button.module.scss'
import { Link } from 'react-router-dom'

//Componente Button recibe un texto, color del boton, manejador de click y ruta a la que se redirige
const Button = ({text, color, click, route}) => {
  //clases del componente
  const clases = color ? [styles.btn, styles.btnPurple] : [styles.btn]
  return (
    <Link 
      to={route} 
      onClick={click} 
      className={clases.join(' ')}
    >
      {text}
    </Link>
  )
}

export default Button
