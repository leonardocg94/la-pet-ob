import React from 'react'
import styles from './notFound.module.scss'

//Componente notfound que se muestra cuando la ruta no es reconicida, recibe el mensaje a mostrar
const NotFound = ({texto}) => {
  return (
    <section className={styles.notFounded}>
      <h2 className={styles.notMessage}>{texto}</h2>
    </section>
  )
}

export default NotFound
