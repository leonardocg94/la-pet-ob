import React, { useContext } from 'react'
import contextCarrito from '../../../context/carrito/contextCarrito'
import styles from './carrito.module.scss'
import SectionTitle2 from '../../sectionTitle2/SectionTitle2'
import CarritoItem from './carritoItem/CarritoItem'
import RelatedProducts from '../../relatedProducts/RelatedProducts'

const Carrito = () => {

  const cContext = useContext(contextCarrito)
  const { total, carItems } = cContext

  

  if (carItems.length > 0) {
    return (
      <section className={styles.carrito}>
        <SectionTitle2 titulo='Carrito' />
        <div className={styles.itemContainer}>

          {carItems.map(ele => (
            <div key={ele.id} className={styles.item}>
              <CarritoItem {...ele} />
            </div>
          ))}

        </div>
        <p className={styles.total}>Total: ${total}</p>
        <RelatedProducts />
      </section>
    )
  } else {
    return (
      <section className={styles.carrito}>
        <SectionTitle2 titulo='Carrito' />
        <h2 className={styles.empty}>No hay Productos en el Carrito</h2>
        <RelatedProducts />
      </section>
    )
  }
}

export default Carrito
