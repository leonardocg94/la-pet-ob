import React from 'react'
import styles from './socials.module.scss'

//componente con las principales redes sociales
const Socials = () => {
  return (
    <div className={styles.socials}>
      <a
        rel='noreferrer'
        target='_blank'
        href='https://www.facebook.com/LaPetiteObsession/'
        className={`${styles.socialsLink} ${styles.facebook}`}
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <a
        rel='noreferrer'
        target='_blank'
        href='https://www.instagram.com/la_petite_obsession/'
        className={`${styles.socialsLink} ${styles.instagram}`}
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        rel='noreferrer'
        target='_blank'
        href="https://api.whatsapp.com/send?phone=525537295707"
        className={`${styles.socialsLink} ${styles.whatsapp}`}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a
        rel='noreferrer'
        target='_blank'
        href='https://www.tiktok.com/@la_petite_obsession/'
        className={`${styles.socialsLink} ${styles.tiktok}`}
      >
        <i className="fab fa-tiktok"></i>
      </a>
    </div>
  )
}

export default Socials
