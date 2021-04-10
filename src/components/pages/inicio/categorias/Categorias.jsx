import React from 'react'
import styles from './categorias.module.scss'

const Categorias = () => {
  return (
    <div className={styles.categorias}>
      <figure className={styles.category}>
        <img src={require('../../../../img/categorias/pelucas.jpg').default} alt="pelucas" />
        <p>Pelucas</p>
      </figure>
      <figure className={styles.category}>
        <img src={require('../../../../img/categorias/accesorios.jpg').default} alt="accesorios" />
        <p className={styles.accesorios}>Accesorios</p>
      </figure>
      <figure className={styles.category}>
        <img src={require('../../../../img/categorias/lenceria.jpg').default} alt="lenceria" />
        <p>Lenceria</p>
      </figure>
    </div>
  )
}

export default Categorias
