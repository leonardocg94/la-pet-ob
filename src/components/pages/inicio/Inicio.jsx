import React, { useEffect, useState } from 'react'
import styles from './inicio.module.scss'
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

  //Estado para manejar la carga del componente
  const [loading, setLoading] = useState(true)
  //Estado para almacenar los productos recientes
  const [recentItems, setrecentItems] = useState([])

  //Carga los productos mas nuevos asegurandose de que hay productos en el estado global aun despues de hacer una busqueda sin resultados
  useEffect(() => {
    const fetchRecientes = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_BK_HOST+'/producto/recientes')
        const data = await response.json()
        setrecentItems(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchRecientes()
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    const recentProducts = recentItems.map((pro, i) => {
      return {
        id: i,
        item: 
          <div style={{height: '100%'}}>
            <Producto {...pro} />
          </div>
      }
    })

    content = (
      <section className={styles.inicio}>

        <div className={styles.banner}>
          <img src={process.env.REACT_APP_BK_HOST+`/resources/img/banner/banner.jpg`} alt="banner" />
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
