import React, { useState, useContext, useEffect } from 'react'
import contextProductos from '../../../context/productos/contextProductos'
import styles from './catalogo.module.scss'
import NotFound from '../../notFound/NotFound'
import SectionTitle2 from '../../sectionTitle2/SectionTitle2'
import ContenedorProductos from './contenedorProductos/ContenedorProductos'
import Filtros from './filtros/Filtros'

const Catalogo = () => {

  const { catalogo, filtros, positioning, productosPosition,
    btnFiltros, show, pantalla, grow, ftAnimated, ftCloseAnimated } = styles

  //state to manage show-hide filter in mobile devices
  const [showFiltros, setShowiltros] = useState(false)

  const [loading, setLoading] = useState(true)

  //productos per page
  const prodPerPage = 8
  //state to manage the slice of products and set the next slice
  const [sliceArray, setSlicearray] = useState([])
  const [next, setNext] = useState(prodPerPage)

  //useo del contexto de productos 
  const pContext = useContext(contextProductos)
  const { resetProducts, filteredProducts } = pContext

  //funcion para cambiar el estado de show  
  const filtrosHandler = () => {
    const auxShow = !showFiltros
    setShowiltros(auxShow)
  }

  //logica para el cargar mas
  const loadMore = (start, end) => {
    const slicedPost = filteredProducts.slice(start, end)
    const currentPost = [...sliceArray, ...slicedPost]
    setSlicearray(currentPost)
  }

  //to manage load more btn
  const handleLoad = () => {
    loadMore(next, next + prodPerPage)
    setNext(next + prodPerPage)
  }

  useEffect(() => {

    loadMore(0, prodPerPage)
    setLoading(false)
    return () => {
      resetProducts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if (!loading) {

    return (
      <section className={catalogo}>
        <SectionTitle2 titulo='Catalogo' />
        <div className={positioning}>
          <div className={showFiltros ? [filtros, show].join(' ') : filtros}>
            <Filtros />
          </div>
          <div className={productosPosition}>
            {filteredProducts.length === 0
              ? <NotFound texto='Sin resultados' />
              : <ContenedorProductos productos={sliceArray} />
            }
          </div>
          <button
            onClick={filtrosHandler}
            className={btnFiltros}
          >
            <span
              className={showFiltros ? [ftAnimated, ftCloseAnimated].join(' ') : ftAnimated}
            ></span>
          </button>
          <div
            className={showFiltros ? [pantalla, grow].join(' ') : pantalla}
          ></div>
        </div>
        {
          next <= filteredProducts.length
            ?
            <button onClick={handleLoad} className={styles.loadMore}>
              Cargar más...
            </button>
            : null
        }
      </section>
    )
  } else {
    return (
      <section className={catalogo}>
        <h2 style={{margin: '4rem 0', fontSize: '2rem', textAlign: 'center'}}>Loading...</h2>
      </section>
    )
  }

}

export default Catalogo
