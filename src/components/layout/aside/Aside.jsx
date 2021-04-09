import React, { useState } from 'react'
import styles from './aside.module.scss'
import Menu from '../../menu/Menu'

const Aside = () => {

  const [addclass, setAddClass] = useState(false)

  const showMenu = () => {
    const auxClass = !addclass
    setAddClass(auxClass)
  }

  return (
    <aside className={addclass ? `${styles.navigation} ${styles.showNavigation}` : `${styles.navigation}`}>
      <div className={styles.topContainer}>
        <h1 className={styles.storeName}>La Petite Obsession</h1>
        <button onClick={showMenu} className={styles.btnMenu}>
          <span 
            className={addclass ? `${styles.barsAnimated} ${styles.crossAnimated}`: `${styles.barsAnimated}`}>
          </span>
        </button>
      </div>
      <div className={addclass ? `${styles.bottomContainer} ${styles.showBottomcontainer}` : `${styles.bottomContainer}`}>
        <Menu />
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
      </div>
    </aside>
  )
}

export default Aside
