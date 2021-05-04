import React, { useContext } from 'react'
import contextCarrito from '../../../context/carrito/contextCarrito'
import styles from './carrito.module.scss'
import SectionTitle2 from '../../sectionTitle2/SectionTitle2'
import CarritoItem from './carritoItem/CarritoItem'
import RelatedProducts from '../../relatedProducts/RelatedProducts'

//Componente pagina de carrito
const Carrito = () => {

  //Contexto del carrito y los atributos total y numero de items
  const cContext = useContext(contextCarrito)
  const { total, carItems, noItems } = cContext

  //variable con contenido condicional del carrito
  let content
  if (carItems.length > 0) {
    //variable con items del carrito
    const items = carItems.map(ele => (
      <div key={ele.id} className={styles.item}>
        <CarritoItem {...ele} />
      </div>
    ))

    content = (
      <>
        <div className={styles.itemContainer}>
          {items}
        </div>
        <div className={styles.infoCarrito}>
          <span className={styles.cantidadTotal}>
            Número de artículos: {noItems}
          </span>
          <span className={styles.total}>Total: ${total}</span>
        </div>
      </>
    )
  } else {
    content = (
      <h2 className={styles.empty}>No hay Productos en el Carrito</h2>
    )
  }

  return (
    <section className={styles.carrito}>
      <SectionTitle2 titulo='Carrito' />
      {content}
      <RelatedProducts />
    </section>
  )
}

export default Carrito
