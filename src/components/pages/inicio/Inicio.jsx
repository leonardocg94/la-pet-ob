import React from 'react'
import styles from './inicio.module.scss'
import SectionTitle from '../../sectionTitle/SectionTitle'

const Inicio = () => {
  return (
    <>
      <section className={styles.inicio}>
        <div className={styles.banner}>
          <img src={require('../../../img/banner/banner.jpg').default} alt="banner"/>
        </div>
        <SectionTitle title='Bienvenido!'/>
      </section>
    </>
  )
}

export default Inicio
