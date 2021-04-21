import React, { useContext } from 'react'
import styles from './relatedProducts.module.scss'
import contextProductos from '../../context/productos/contextProductos'
import SectionTitle from '../sectionTitle/SectionTitle'
import Producto from '../producto/Producto'

const RelatedProducts = () => {

  const pContext = useContext(contextProductos)
  const { productos } = pContext

  const relatedItems = []

  const getRandomNumber = (max, min) => {
    const randomNumber = Math.ceil(Math.random() * (max - min) + min)
    return randomNumber
  }

  for (let i = 0; i < 4; i++)
    relatedItems.push(productos[getRandomNumber(29, 0)])

  return (
    <>
      <SectionTitle title='Productos que quiza te interesen' />
      <div className={styles.relatedProducts}>
        {relatedItems.map((ele, i) => (
          <div key={i} className={styles.productContainer}>
            <Producto {...ele} />
          </div>
        ))}
      </div>
    </>
  )
}

export default RelatedProducts
