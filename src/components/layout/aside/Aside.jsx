import React from 'react'
import styles from './aside.module.scss'
import Menu from '../../menu/Menu'

const Aside = () => {
  return (
    <aside className={styles.navigation}>
      <h1 className={styles.storeName}>La Petite Obsession</h1>
      <Menu/>
      <div className={styles.socials}>
        <a href='!#' className={`${styles.socialsLink} ${styles.facebook}`} >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href='!#' className={`${styles.socialsLink} ${styles.instagram}`} >
          <i className="fab fa-instagram"></i>
        </a>
        <a href='!#' className={`${styles.socialsLink} ${styles.whatsapp}`} >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </aside>
  )
}

export default Aside
