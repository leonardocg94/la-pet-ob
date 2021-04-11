import React from 'react'
import styles from './about.module.scss'

const About = () => {
  return (
    <div className={styles.about}>
      <figure className={styles.imagen}>
        <img src={require('../../../../img/logos/logo.jpg').default} alt="petite obsession logo" />
      </figure>
      <div className={styles.text}>
        <h3>¿A qué nos dedicamos?</h3>
        <p>Somos una tienda online que se dedica a la venta de pelucas, accesorios, trajes y lenceria para que puedas realizar los atuendos que tu obsesion te demande.</p>
      </div>
    </div>  
  )
}

      export default About