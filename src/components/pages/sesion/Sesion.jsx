import React from 'react'
import styles from './sesion.module.scss'
import SectionTitle2 from '../../sectionTitle2/SectionTitle2'
import FormSesion from './formSesion/FormSesion'

const Sesion = () => {
  return (
    <section className={styles.sesion}>
      <SectionTitle2 titulo='Iniciar Sesión'/>
      <div className={styles.formContainer}>
        <FormSesion/>
      </div>
    </section>
  )
}

export default Sesion