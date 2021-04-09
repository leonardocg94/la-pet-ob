import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <div className={styles.help}>
          <h3>¿En qué puedo ayudarte?</h3>
          <p>Puedes contactarme por telefono para pedir cualuier información o concretar una compra</p>
          <p className={styles.telefono}>(55)37-29-57-07</p>
        </div>
        <div className={styles.usefulLinks}>
          <h3>Enlaces útiles</h3>
          <a href='/'>Inicio</a>
          <a href='/'>Catalogo</a>
        </div>
        <div className={styles.socials}>
          <h3>Redes Sociales</h3>
          <a rel='noreferrer' target='_blank' href='https://www.facebook.com/LaPetiteObsession/'>Facebook</a>
          <a rel='noreferrer' target='_blank' href='https://www.instagram.com/la_petite_obsession/'>Instagram</a>
          <a rel='noreferrer' target='_blank' href="https://api.whatsapp.com/send?phone=525537295707">WhatsApp</a>
          <a rel='noreferrer' target='_blank' href='https://www.tiktok.com/@la_petite_obsession'>Tiktok</a>
        </div>
      </div>
      <div className={styles.payMethods}>
        <img 
          src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" 
          alt="PayPal Logo"
        />
        <img 
          src={require('../../../img/paymethods/mastercard.png').default}   alt="Master Card Logo"
        />
        <img 
          src={require('../../../img/paymethods/visa.png').default}
          alt='Visa Logo'
        />
        
        
      </div>
    </footer>
      )
}

      export default Footer

