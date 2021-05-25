import React from 'react'
import styles from './payMethods.module.scss'

const PayMethods = () => {
  return (
    <div className={styles.payMethods}>

      <img
        src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png"
        alt="PayPal Logo"
      />

      <img
        src='http://127.0.0.1:5000/resources/img/paymethods/mastercard.png' alt="Master Card Logo"
      />

      <img
        src='http://127.0.0.1:5000/resources/img/paymethods/visa.png'
        alt='Visa Logo'
      />

    </div>
  )
}

export default PayMethods
