import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import contextProductos from '../../../context/productos/contextProductos'
import styles from './detalles.module.scss'
import TouchSlider from '../../touchSlider/TouchSlider'
import Info from './info/Info'
import NotFound from '../../notFound/NotFound'
import RelatedProducts from '../../relatedProducts/RelatedProducts'


const Detalles = () => {

  const [loading, setLoading] = useState(true)

  const { detalles, mainContent, images, info } = styles

  const refId = useParams().id

  const pContext = useContext(contextProductos)
  const { selectedProduct, selectProduct } = pContext

  useEffect(() => {
    selectProduct(refId)
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refId])

  useEffect(() => {
    selectProduct(refId)
    setLoading(false)
    return () => {
      selectProduct(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let displayed

  if (loading) {
    displayed = (
      <section className={detalles}>
        <h2 style={{
          marginBottom: '4rem',
          fontSize: '2.5rem'
        }}>Cargando...</h2>
      </section>
    )
  } else {
    if (selectedProduct) {

      displayed = (
        <section className={detalles}>
          <div className={mainContent}>
            <div className={images}>
              <TouchSlider
                breakPoints={{}}
                slides={1}
                tempCatalog={loading ? [<h2>loading...</h2>] : selectedProduct.imgs}
              />
            </div>
            <div className={info}>
              <Info productoSeleccionado={selectedProduct.product} />
            </div>
          </div>
          <RelatedProducts />

        </section>
      )
    } else {
      displayed = (
        <NotFound texto='Producto no encontrado' />
      )
    }
  }

  return (
    <>
      {displayed}
    </>
  )

}

export default Detalles
