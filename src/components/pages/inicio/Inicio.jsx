import React, { useContext, useEffect, useState } from 'react'
import styles from './inicio.module.scss'
import contextProductos from '../../../context/productos/contextProductos'
import SectionTitle from '../../sectionTitle/SectionTitle'
import Ventajas from './ventajas/Ventajas'
import About from './about/About'
import Categorias from './categorias/Categorias'
import TouchSlider from '../../touchSlider/TouchSlider'
import Producto from '../../producto/Producto'
import LoadComp from '../../loadComp/LoadComp'
import Spinner from '../../spinner/Spinner'

//Componente principal de inicio
const Inicio = () => {

  //Uso del contexto de productos y su atributo productos
  const pContext = useContext(contextProductos)
  const { productos, noAllItems } = pContext

  //Estado para manejar la carga del componente
  const [loading, setLoading] = useState(true)
  //Estado para almacenar los productos recientes
  const [recentItems, setrecentItems] = useState()

  //Carga los productos mas nuevos asegurandose de que hay productos en el estado global aun despues de hacer una busqueda sin resultados
  useEffect(() => {
    setLoading(true)
    if (productos.length === noAllItems) {
      setrecentItems(productos.slice(0, 9))
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productos])

  let content
  if (!loading) {

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

    //Lista de items para el slider
    const recentProducts = recentItems.map(pro => {
      return {
        id: pro.id,
        item: (
          <div style={{height: '100%'}}>
            <Producto {...pro} />
          </div>
        )
      }
    })

    content = (
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
  } else {
    content = (
      <LoadComp>
        <Spinner />
      </LoadComp>
    )
  }


  return (
    <>
      {content}
    </>
  )
}

export default Inicio
