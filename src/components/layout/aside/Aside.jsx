import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './aside.module.scss'
import Menu from '../../menu/Menu'

const Aside = () => {

  const [addclass, setAddClass] = useState(false)

  const showMenu = () => {
    const auxClass = !addclass
    setAddClass(auxClass)
  }
  const hideMenu = () => {
    setAddClass(false)
  }

  return (
    <aside
      className={addclass
        ? `${styles.navigation} ${styles.showNavigation}`
        : `${styles.navigation}`}
    >
      <div className={styles.topContainer}>
        <NavLink onClick={hideMenu} className={styles.storeName} exact to='/'>
          <h1>La Petite Obsession</h1>
        </NavLink>

        <button onClick={showMenu} className={styles.btnMenu}>
          <span
            className={addclass ? `${styles.barsAnimated} ${styles.crossAnimated}` : `${styles.barsAnimated}`}>
          </span>
        </button>
      </div>
      <div className={addclass ? `${styles.bottomContainer} ${styles.showBottomcontainer}` : `${styles.bottomContainer}`}>
        <Menu click={hideMenu}/>
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
      </div>
    </aside>
  )
}

export default Aside
