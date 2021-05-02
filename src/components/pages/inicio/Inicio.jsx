import React, { useContext, useMemo } from 'react'
import styles from './inicio.module.scss'
import contextProductos from '../../../context/productos/contextProductos'
import SectionTitle from '../../sectionTitle/SectionTitle'
import Ventajas from './ventajas/Ventajas'
import About from './about/About'
import Categorias from './categorias/Categorias'
import TouchSlider from '../../touchSlider/TouchSlider'
import Producto from '../../producto/Producto'

//Componente principal de inicio
const Inicio = () => {

  //Uso del contexto de productos y su atributo productos
  const pContext = useContext(contextProductos)
  const { productos } = pContext

  //Funcion que carga los productos recientes
  const recentProductsLoad = () => {
    const arr = []
    for (let i = 0; i < 8; i++)
    arr.push({
      id: productos[i].id,
      item: (<Producto {...productos[i]} />)
    })
    return arr
  }  

  //Variable que contiene los productos recientes
  const recentProducts = useMemo(
    () => recentProductsLoad(), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [productos]
  )

  //Objecto que contiene los brakpoints del slider
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
          tempCatalog={recentProducts}
          breakPoints={breakPoints}
          slides={1}
        />
      </div>

    </section>
  )
}

export default Inicio
