import React from 'react'
import styles from './inicio.module.scss'
import SectionTitle from '../../sectionTitle/SectionTitle'

const Inicio = () => {
  return (
    <>
      <section className={styles.inicio}>
        <div className={styles.banner}>
          <img src={require('../../../img/banner/banner.jpg').default} alt="banner"/>
        </div>
        <SectionTitle title='Bienvenido!'/>
        <div className={styles.about}>
          <figure className={styles.imagen}>
            <img src={require('../../../img/logos/logo.jpg').default} alt="petite obsession logo"/>
          </figure>
          <div className={styles.text}>
            <h3>¿A qué nos dedicamos?</h3>
            <p>Somos una tienda online que se dedica a la venta de pelucas, accesorios, trajes y lenceria para que puedas realizar los atuendos que tu obsesion te demande.</p>
          </div>
        </div>
        <SectionTitle title='Categorias'/>
        <div className={styles.categorias}>
          <figure className={styles.category}>
            <img src={require('../../../img/categorias/pelucas.jpg').default} alt="pelucas"/>
            <p>Pelucas</p>  
          </figure>
          <figure className={styles.category}>
            <img src={require('../../../img/categorias/accesorios.jpg').default} alt="accesorios"/>
            <p className={styles.accesorios}>Accesorios</p>  
          </figure>
          <figure className={styles.category}>
            <img src={require('../../../img/categorias/lenceria.jpg').default} alt="lenceria"/>
            <p>Lenceria</p>  
          </figure>
        </div>
      </section>
    </>
  )
}

export default Inicio
