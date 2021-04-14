import React, { useState, useContext } from 'react'
import contextProductos from '../../../context/productos/contextProductos'
import styles from './catalogo.module.scss'
import SectionTitle2 from '../../sectionTitle2/SectionTitle2'
import ContenedorProductos from './contenedorProductos/ContenedorProductos'
import Filtros from './filtros/Filtros'

const Catalogo = () => {

  const { catalogo, filtros, positioning, productosPosition,
    btnFiltros, show, pantalla, grow } = styles

  const [showFiltros, setShowiltros] = useState(false)

  const pContext = useContext(contextProductos)
  const { productos } = pContext

  const filtrosHandler = () => {
    const auxShow = !showFiltros
    setShowiltros(auxShow)
  }

  return (
    <section className={catalogo}>
      <SectionTitle2 titulo='Catalogo' />
      <div className={positioning}>
        <div className={showFiltros ? [filtros, show].join(' ') : [filtros].join(' ')}>
          <Filtros />
        </div>
        <div className={productosPosition}>
          <ContenedorProductos productos={productos} />
        </div>
        <button onClick={filtrosHandler} className={btnFiltros}>F</button>
        <div className={showFiltros ? [pantalla, grow].join(' ') : [pantalla].join(' ')}></div>
      </div>
    </section>
  )
}

export default Catalogo
