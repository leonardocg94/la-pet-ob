import React from 'react'
import styles from './about.module.scss'

//Seccion about de la pagina de inicio
const About = () => {
  return (
    <div className={styles.about}>

      <figure className={styles.imagen}>
        <img 
          src='http://127.0.0.1:5000/resources/img/logos/logo.jpg' 
          alt="petite obsession logo" 
        />
      </figure>

      <div className={styles.text}>
        <h3>¿A qué nos dedicamos?</h3>
        <p>
          Somos una tienda online que se dedica a la venta de pelucas, accesorios, trajes y lenceria para que puedas realizar los atuendos que tu obsesion te demande.
        </p>
      </div>
      
    </div>  
  )
}

      export default About
