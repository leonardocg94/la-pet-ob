import React from 'react'
import styles from './loadComp.module.scss'

//Componente que se muestra al cargar una pagina completa
const LoadComp = ({children}) => {
  return (
    <section className={styles.load}>
      {children}
    </section>
  )
}

export default LoadComp
