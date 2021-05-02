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
        src={require('../../../../img/paymethods/mastercard.png').default} alt="Master Card Logo"
      />

      <img
        src={require('../../../../img/paymethods/visa.png').default}
        alt='Visa Logo'
      />

    </div>
  )
}

export default PayMethods
