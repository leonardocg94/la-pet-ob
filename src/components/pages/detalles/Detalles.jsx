import React, { useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import contextProductos from '../../../context/productos/contextProductos'
import styles from './detalles.module.scss'
import TouchSlider from '../../touchSlider/TouchSlider'
import Info from './info/Info'
import SectionTitle from '../../sectionTitle/SectionTitle'
import Producto from '../../producto/Producto'


const Detalles = () => {

  const { detalles, mainContent, images, info } = styles

  const refId = useParams().id
  const history = useHistory()

  const pContext = useContext(contextProductos)
  const { productoSeleccionado, selectProduct, productos } = pContext


  useEffect(() => {
    const pro = (productos.filter(ele => ele.id === refId))[0]
    if (!pro)
      history.push('/catalogo')
    else
      selectProduct(pro)

    return () => {
      selectProduct(null)
    }
  }, [refId]) // eslint-disable-line react-hooks/exhaustive-deps

  const getRandomNumber = (max, min) => {
    const randomNumber = Math.ceil(Math.random() * (max - min) + min)
    return randomNumber
  }


  if (productoSeleccionado) {
    const imgSty = {
      height: '100%',
      verticalAlign: 'top',
      objectFit: 'cover',
      margin: '0 auto',
      display: 'block',
      borderRadius: '3px'
    }
    const tempCatalog = []
    const { id, nombre, tipo } = productoSeleccionado
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
    const relatedItems = []
    for (let i = 0; i < 4; i++)
      relatedItems.push(productos[getRandomNumber(29, 0)])  

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
            <Info productoSeleccionado={productoSeleccionado} />
          </div>
        </div>
        <SectionTitle title='Productos que quiza te interesen' />
        <div className={styles.relatedProducts}>
          {relatedItems.map((ele,i) => (
            <div key={i} className={styles.productContainer}>
              <Producto {...ele} />
            </div>
          ))}
        </div>
      </section>
    )
  } else {
    return null
  }
}

export default Detalles
