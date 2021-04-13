import React from 'react'
import styles from './inicio.module.scss'
import SectionTitle from '../../sectionTitle/SectionTitle'
import Ventajas from './ventajas/Ventajas'
import About from './about/About'
import Categorias from './categorias/Categorias'
import TouchSlider from  '../../touchSlider/TouchSlider'

const Inicio = () => {

  const tempCatalog = [
    {
      id: '1',
      nombre: 'Menta-lacia-larga',
      precio: '600',
      tipo: 'pelucas'
    },
    {
      id: '2',
      nombre: 'Castaño-lacio-bob',
      precio: '550',
      tipo: 'pelucas'
    },
    {
      id: '3',
      nombre: 'Rojo-ruby-bob',
      precio: '600',
      tipo: 'pelucas'
    },
    {
      id: '4',
      nombre: 'Dark-chocolate-chino-largo',
      precio: '700',
      tipo: 'pelucas'
    },
    {
      id: '5',
      nombre: 'Rubio-lacio-bob',
      precio: '550',
      tipo: 'pelucas'
    },
    {
      id: '6',
      nombre: 'Gris-plata-larga-lacia',
      precio: '700',
      tipo: 'pelucas'
    },
    {
      id: '7',
      nombre: 'Gris-morada-larga',
      precio: '750',
      tipo: 'pelucas'
    },
    {
      id: '8',
      nombre: 'Golden-pink-corta',
      precio: '550',
      tipo: 'pelucas'
    }
  ]
  const breakPoints = {
    1501: {
      slidesPerView: 4
    },
    1101: {
      slidesPerView: 3
    },
    501: {
      slidesPerView: 2
    }
  }

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
        <SectionTitle title='Productos Recientes'/>
        <div className={styles.sliderContainer}>
          <TouchSlider 
            tempCatalog={tempCatalog} 
            breakPoints={breakPoints}
            slides={1}
          />
        </div>
      </section>
    </>
  )
}

export default Inicio
