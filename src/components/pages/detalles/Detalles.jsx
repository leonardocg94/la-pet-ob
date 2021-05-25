import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import contextProductos from '../../../context/productos/contextProductos'
import styles from './detalles.module.scss'
import TouchSlider from '../../touchSlider/TouchSlider'
import Info from './info/Info'
import NotFound from '../../notFound/NotFound'
import RelatedProducts from '../../relatedProducts/RelatedProducts'
import Spinner from '../../spinner/Spinner'

//Componente principal que muestra los detalles de un producto
const Detalles = () => {
  //Estado que nos indica si el componente esta cargando
  const [loading, setLoading] = useState(true)

  //id del producto pasado como parametro en la url
  const refId = useParams().id

  //Contexto de los productos y sus metodos a usar
  const pContext = useContext(contextProductos)
  const { selectedProduct, selectProduct } = pContext

  //Cuando el id es cambiado se reselecciona el producto en el contexto de productos
  useEffect(() => {
    selectProduct(refId)
    setLoading(false)
    return () => {
      setLoading(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refId])

  //Contenido condicional del componente
  let content
  if (loading) {
    content = (
      <section className={styles.load}>
        <Spinner />
      </section>
    )
  } else {
    if (selectedProduct) {
      content = (
        <section className={styles.detalles}>

          <div className={styles.mainContent}>

            <div className={styles.images}>
              <TouchSlider
                breakPoints={{}}
                slides={1}
                tempCatalog={selectedProduct.imgs}
              />
            </div>

            <div className={styles.info}>
              <Info productoSeleccionado={selectedProduct.product} />
            </div>

          </div>

          <RelatedProducts />

        </section>
      )
    } else {
      content = (
        <NotFound texto='Producto no encontrado' />
      )
    }
  }

  return (
    <>
      {content}
    </>
  )

}

export default Detalles
