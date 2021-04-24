import React, { useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import contextProductos from '../../../context/productos/contextProductos'
import styles from './detalles.module.scss'
import TouchSlider from '../../touchSlider/TouchSlider'
import Info from './info/Info'
import NotFound from '../../notFound/NotFound'
import RelatedProducts from '../../relatedProducts/RelatedProducts'

const imgSty = {
  height: '100%',
  verticalAlign: 'top',
  objectFit: 'cover',
  margin: '0 auto',
  display: 'block',
  borderRadius: '3px'
}

const Detalles = () => {

  const { detalles, mainContent, images, info } = styles

  const refId = useParams().id

  const pContext = useContext(contextProductos)
  const { selectedProduct, selectProduct } = pContext

  useEffect(() => {
    selectProduct(refId)
    return () => {
      selectProduct('-1')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refId])

  const loadImg = () => {
    const tempCatalog = []
    const { id, nombre, tipo } = selectedProduct
    for (let i = 1; i < 5; i++) {
      const img = <img
        src={require(`../../../img/${tipo}/${id}_${nombre}/${i}.jpg`).default}
        alt={`Peluca ${nombre}`}
        style={imgSty}
      />
      tempCatalog.push({
        id: i,
        item: img
      })
    }
    return tempCatalog
  }

  if (selectedProduct) {

    const tempCatalog = loadImg()


    return (
      <section className={detalles}>
        <div className={mainContent}>
          <div className={images}>
            <TouchSlider
              breakPoints={{}}
              slides={1}
              tempCatalog={tempCatalog}
            />
          </div>
          <div className={info}>
            <Info productoSeleccionado={selectedProduct} />
          </div>
        </div>
        <RelatedProducts />

      </section>
    )
  } else {
    return (
      <NotFound texto='Producto no encontrado' />
    )
  }
}

export default Detalles
