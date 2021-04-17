import React, { useState, useContext, useEffect } from 'react'
import contextProductos from '../../../context/productos/contextProductos'
import styles from './catalogo.module.scss'
import SectionTitle2 from '../../sectionTitle2/SectionTitle2'
import ContenedorProductos from './contenedorProductos/ContenedorProductos'
import Filtros from './filtros/Filtros'

const Catalogo = () => {

  const { catalogo, filtros, positioning, productosPosition,
    btnFiltros, show, pantalla, grow, ftAnimated, ftCloseAnimated } = styles

  const [showFiltros, setShowiltros] = useState(false)

  const pContext = useContext(contextProductos)
  const { filteredProducts, resetProducts } = pContext

  const filtrosHandler = () => {
    const auxShow = !showFiltros
    setShowiltros(auxShow)
  }

  useEffect(() => {
    return () => {
      resetProducts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={catalogo}>
      <SectionTitle2 titulo='Catalogo' />
      <div className={positioning}>
        <div className={showFiltros ? [filtros, show].join(' ') : filtros}>
          <Filtros />
        </div>
        <div className={productosPosition}>
          <ContenedorProductos productos={filteredProducts} />
        </div>
        <button onClick={filtrosHandler} className={btnFiltros}><span className={showFiltros ? [ftAnimated,ftCloseAnimated].join(' ') : ftAnimated}></span></button>
        <div className={showFiltros ? [pantalla, grow].join(' ') : pantalla}></div>
      </div>
    </section>
  )
}

export default Catalogo
