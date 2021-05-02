import React from 'react'
import styles from './footer.module.scss'
import { NavLink } from 'react-router-dom'
import PayMethods from './payMethods/PayMethods'


//componente footer para todas las paginas
const Footer = () => {

  return (
    <footer className={styles.footer}>

      <div className={styles.footerInfo}>

        <div className={styles.help}>
          <h3>¿En qué puedo ayudarte?</h3>
          <p>
            Puedes contactarme por telefono para pedir cualuier información o concretar una compra
          </p>
          <p className={styles.telefono}>(55)37-29-57-07</p>
        </div>

        <div className={styles.usefulLinks}>
          <h3>Enlaces útiles</h3>
          <NavLink to='/'>Inicio</NavLink>
          <NavLink to='/catalogo'>Catalogo</NavLink>
        </div>

        <div className={styles.socials}>
          <h3>Redes Sociales</h3>
          <a rel='noreferrer' target='_blank' href='https://www.facebook.com/LaPetiteObsession/'>Facebook</a>
          <a rel='noreferrer' target='_blank' href='https://www.instagram.com/la_petite_obsession/'>Instagram</a>
          <a rel='noreferrer' target='_blank' href="https://api.whatsapp.com/send?phone=525537295707">WhatsApp</a>
          <a rel='noreferrer' target='_blank' href='https://www.tiktok.com/@la_petite_obsession'>Tiktok</a>
        </div>

      </div>

      <PayMethods />

    </footer>
  )
}

export default Footer

