import React, { useContext } from 'react'
import contextCarrito from '../../../context/carrito/contextCarrito'
import styles from './carrito.module.scss'
import SectionTitle2 from '../../sectionTitle2/SectionTitle2'
import CarritoItem from './carritoItem/CarritoItem'

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
        <p style={{fontSize: '2rem'}}>{total}</p>
      </section>
    )
  } else {
    return (
      <section className={styles.carrito}>
        <SectionTitle2 titulo='Carrito' />
        <h2 className={styles.empty}>No hay Productos en el Carrito</h2>
      </section>
    )
  }
}

export default Carrito
