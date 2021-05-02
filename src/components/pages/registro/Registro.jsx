import React from 'react'
import styles from './registro.module.scss'
import SectionTitle2 from '../../sectionTitle2/SectionTitle2'
import FormRegistro from './formRegistro/FormRegistro'

//Componente principal de la pagina de registro
const Registro = () => {
  return (
    <section className={styles.registro}> 
      <SectionTitle2 titulo='Registrate!'/>
      
      <div className={styles.formContainer}>
        <FormRegistro/>
      </div>
    </section>
  )
}

export default Registro
