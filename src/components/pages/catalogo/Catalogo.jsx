import React, { useState, useContext, useEffect } from 'react'
import contextProductos from '../../../context/productos/contextProductos'
import styles from './catalogo.module.scss'
import NotFound from '../../notFound/NotFound'
import SectionTitle2 from '../../sectionTitle2/SectionTitle2'
import ContenedorProductos from './contenedorProductos/ContenedorProductos'
import Filtros from './filtros/Filtros'
import Spinner from '../../spinner/Spinner'

//Componente principal catalogo
const Catalogo = () => {

  //Estado que muestra u oculta los filtros en dispositivos moviles
  const [showFiltros, setShowiltros] = useState(false)
  //Estado que muestra si el componente se esta renderizando
  const [loading, setLoading] = useState(true)

  //Variable que muestra los productos por pagina mostrados por el catalogo
  const prodPerPage = 8

  //Estado para saber si es el primer renderizado
  const [first, setFirst] = useState(true)
  //Estado para saber cuantos productos mostrar de la lista
  const [next, setNext] = useState(prodPerPage)
  //Estado que contiene los productos a mostrar de la lista
  const [slicedArray, setSlicedarray] = useState([])

  //useo del contexto de productos y el atributo de productos filtrados 
  const pContext = useContext(contextProductos)
  const { filteredProducts } = pContext

  //Manejador para ocultar o mostrar los filtros 
  const filtrosHandler = () => {
    const auxShow = !showFiltros
    setShowiltros(auxShow)
  }

  //Manejador para cargar mas productos de la lista
  const handleLoad = () => {
    setSlicedarray(filteredProducts.slice(0, next))
    setNext(next + prodPerPage)
  }

  //Cargar los primeros por pagina de la lista
  useEffect(() => {
    console.log('mount')
    handleLoad()
    setLoading(false)
    return () => {
      console.log('unmounted')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Cada vez que los productos filtrados cambian se reinicia la carga de productos por pagina de la lista
  useEffect(() => {
    if (first) {
      console.log('first')
      setFirst(false)
    } else {
      console.log('not first')
      setSlicedarray([])
      setNext(0)
      handleLoad()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredProducts])

  //variable que contiene el contenido condicional del componente
  let content
  if (!loading) {

    //Variables para los estilos condicilnales de los filtros el icono del boton para filtros y la pantalla detras de los filtros en dispositivos moviles
    let filtrosClasses
    let iconClasses
    let pantallaClasses
    if (showFiltros) {
      filtrosClasses = [styles.filtros, styles.show].join(' ')
      iconClasses = [styles.ftAnimated, styles.ftCloseAnimated].join(' ')
      pantallaClasses = [styles.pantalla, styles.grow].join(' ')
    } else {
      filtrosClasses = styles.filtros
      iconClasses = styles.ftAnimated
      pantallaClasses = styles.pantalla
    }

    //variable del contenido condicional de los productos mostrados
    const displayedProducts = filteredProducts.length === 0
      ? <NotFound texto='Sin resultados' />
      : <ContenedorProductos productos={slicedArray} />

    //Variable que muestra condicionalmente el boton de cargarmas
    const btnLoadMore = next <= filteredProducts.length + prodPerPage
      ?
      <button onClick={handleLoad} className={styles.loadMore}>
        Ver más...
      </button>
      : null

    content = (
      <section className={styles.catalogo}>

        <SectionTitle2 titulo='Catalogo' />

        <div className={styles.positioning}>

          <div className={filtrosClasses}>
            <Filtros show={filtrosHandler} />
          </div>

          <div className={styles.productosPosition}>
            {displayedProducts}
          </div>

          <button
            onClick={filtrosHandler}
            className={styles.btnFiltros}
          >
            <span className={iconClasses}></span>
          </button>

          <div className={pantallaClasses}></div>

        </div>

        {btnLoadMore}
      </section>
    )
  } else {
    content = (
      <section className={styles.load}>
        <Spinner />
      </section>
    )
  }

  return (
    <>
      {content}
    </>
  )




}

export default Catalogo
