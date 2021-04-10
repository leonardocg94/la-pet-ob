import React from 'react'
import styles from './ventajas.module.scss'

const Ventajas = () => {
  return (
    <div className={styles.ventajas}>
      <div className={styles.ventaja}>
        <p className={styles.icon}>
          <i class="fas fa-people-arrows"></i>
        </p>
        <p className={styles.text}>
          Entregas personales en el transporte público del Estado de México y la Ciudad de México.
        </p>
      </div>
      <div className={styles.ventaja}>
        <p className={styles.icon}>
          <i class="fas fa-percent"></i>
        </p>
        <p className={styles.text}>
          Descuentos en diferentes promociones y al enviarnos tus fotos usando nuestros productos.
        </p>
      </div>
      <div className={styles.ventaja}>
        <p className={styles.icon}>
          <i class="fas fa-money-bill-wave"></i>
        </p>
        <p className={styles.text}>
          Pagos seguros, en efectivo, con tarjeta o transferencia bancaria.
        </p>
      </div>
    </div>
  )
}

export default Ventajas
