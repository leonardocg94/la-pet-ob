import React, { useState, useContext, useEffect } from 'react'
import contextProductos from '../../../context/productos/contextProductos'
import styles from './catalogo.module.scss'
import NotFound from '../../notFound/NotFound'
import SectionTitle2 from '../../sectionTitle2/SectionTitle2'
import ContenedorProductos from './contenedorProductos/ContenedorProductos'
import Filtros from './filtros/Filtros'
import Spinner from '../../spinner/Spinner'

const Catalogo = () => {

  const { catalogo, filtros, positioning, productosPosition,
    btnFiltros, show, pantalla, grow, ftAnimated, ftCloseAnimated } = styles

  //state to manage show-hide filter in mobile devices
  const [showFiltros, setShowiltros] = useState(false)

  const [loading, setLoading] = useState(true)

  //productos per page
  const prodPerPage = 8
  //state to manage the slice of products and set the next slice
  const [first, setFirst] = useState(true)
  const [next, setNext] = useState(prodPerPage)
  const [slicedArray, setSlicedarray] = useState([])

  //useo del contexto de productos 
  const pContext = useContext(contextProductos)
  const { filteredProducts } = pContext

  //funcion para cambiar el estado de show  
  const filtrosHandler = () => {
    const auxShow = !showFiltros
    setShowiltros(auxShow)
  }

  //to manage load more btn
  const handleLoad = () => {
    setSlicedarray(filteredProducts.slice(0, next))
    setNext(next + prodPerPage)
  }

  useEffect(() => {
    console.log('mount')
    handleLoad()
    setLoading(false)
    return () => {
      console.log('unmounted')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(first){
      console.log('first')
      setFirst(false)
    }else {
      console.log('not first')
      setSlicedarray([])
      setNext(0)
      handleLoad()
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredProducts])


  if (!loading) {

    return (
      <section className={catalogo}>
        <SectionTitle2 titulo='Catalogo' />
        <div className={positioning}>
          <div className={showFiltros ? [filtros, show].join(' ') : filtros}>
            <Filtros show={filtrosHandler}/>
          </div>
          <div className={productosPosition}>
            {filteredProducts.length === 0
              ? <NotFound texto='Sin resultados' />
              : <ContenedorProductos productos={slicedArray} />
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
          next <= filteredProducts.length + prodPerPage
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
      <section className={styles.load}>
        <Spinner/>
      </section>
    )
  }

}

export default Catalogo
