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
        src={process.env.REACT_APP_BK_HOST+'/resources/img/paymethods/mastercard.png'} alt="Master Card Logo"
      />

      <img
        src={process.env.REACT_APP_BK_HOST+'/resources/img/paymethods/visa.png'}
        alt='Visa Logo'
      />

    </div>
  )
}

export default PayMethods
