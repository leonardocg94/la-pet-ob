import React from 'react'
import styles from './inicio.module.scss'
import SectionTitle from '../../sectionTitle/SectionTitle'
import Ventajas from './ventajas/Ventajas'
import About from './about/About'
import Categorias from './categorias/Categorias'

const Inicio = () => {
  return (
    <>
      <section className={styles.inicio}>
        <div className={styles.banner}>
          <img src={require('../../../img/banner/banner.jpg').default} alt="banner"/>
        </div>
        <SectionTitle title='Bienvenido!'/>
        <About/>
        <SectionTitle title='Categorias'/>
        <Categorias />
        <SectionTitle title='Ventajas'/>
        <Ventajas />
      </section>
    </>
  )
}

export default Inicio
