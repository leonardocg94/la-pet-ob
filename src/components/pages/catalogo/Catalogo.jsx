import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import contextProductos from '../../../context/productos/contextProductos'
import styles from './catalogo.module.scss'
import NotFound from '../../notFound/NotFound'
import SectionTitle2 from '../../sectionTitle2/SectionTitle2'
import ContenedorProductos from './contenedorProductos/ContenedorProductos'
import Filtros from './filtros/Filtros'
import Spinner from '../../spinner/Spinner'
import LoadComp from '../../loadComp/LoadComp'

//Componente principal catalogo
const Catalogo = () => {
  //useo del contexto de productos y el atributo de productos filtrados 
  const pContext = useContext(contextProductos)
  const { productos, resetProducts } = pContext

  //Variable que contiene el tpo de catalogo en el que estamos
  const category = useParams().category

  //Variable que muestra los productos por pagina mostrados por el catalogo
  const prodPerPage = 8

  //Productos locales en el catalogo
  const [catgProducts, setCatgproducts] = useState([])


  //Estado que muestra u oculta los filtros en dispositivos moviles
  const [showFiltros, setShowiltros] = useState(false)
  //Estado que muestra si el componente se esta renderizando
  const [loading, setLoading] = useState()

  //Estado para saber cuantos productos mostrar de la lista
  const [next, setNext] = useState()


  //Manejador para ocultar o mostrar los filtros 
  const filtrosHandler = () => {
    const auxShow = !showFiltros
    setShowiltros(auxShow)
  }

  //funcion para mostrar los productos en pantalla de 8 en 8
  const getProductos = () => { return catgProducts.slice(0, next) }


  //Cuando cambian los productos en general se reinicia la paginacion
  useEffect(() => {
    setCatgproducts([...productos])
    setNext(prodPerPage)
    setLoading(false)
    return () => {
      setLoading(true)
    }
  }, [productos])

  //reinicia los productos al salir del catalogo
  useEffect(() => {
    return () => {
      resetProducts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (
    category !== 'Pelucas' &&
    category !== 'Accesorios' &&
    category !== 'Lenceria'
  )
    return <NotFound texto='Categoria no encontrada' />

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
    const displayedProducts = catgProducts.length === 0
      ? <NotFound texto='Sin resultados' />
      : <ContenedorProductos productos={getProductos()} />

    //Variable que muestra condicionalmente el boton de cargarmas
    const btnLoadMore = next <= catgProducts.length
      ?
      <button
        onClick={() => setNext(next + prodPerPage)}
        className={styles.loadMore}
      >
        Ver más...
      </button>
      : null

    content = (
      <section className={styles.catalogo}>

        <SectionTitle2 titulo={`Catalogo de ${category}`} />

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

export default Catalogo
