import React, { useContext } from 'react'
import styles from './inicio.module.scss'
import contextProductos from '../../../context/productos/contextProductos'
import SectionTitle from '../../sectionTitle/SectionTitle'
import Ventajas from './ventajas/Ventajas'
import About from './about/About'
import Categorias from './categorias/Categorias'
import TouchSlider from '../../touchSlider/TouchSlider'
import Producto from '../../producto/Producto'

const Inicio = () => {

  const pContext = useContext(contextProductos)

  const { productos } = pContext

  const tempCatalog = []

  for (let i = 0; i < 8; i++)
    tempCatalog.push({
      id: productos[i].id,
      item: (<Producto {...productos[i]} />)
    })

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
    <section className={styles.inicio}>
      <div className={styles.banner}>
        <img src={require('../../../img/banner/banner.jpg').default} alt="banner" />
      </div>
      <SectionTitle title='Bienvenido!' />
      <About />
      <SectionTitle title='Categorias' />
      <Categorias />
      <SectionTitle title='Ventajas' />
      <Ventajas />
      <SectionTitle title='Productos Recientes' />
      <div className={styles.sliderContainer}>
        <TouchSlider
          tempCatalog={tempCatalog}
          breakPoints={breakPoints}
          slides={1}
        />
      </div>
    </section>
  )
}

export default Inicio
