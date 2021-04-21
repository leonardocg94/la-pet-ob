import React, { useState } from 'react'
import Aside from './aside/Aside'
import SearchBar from './searchBar/SearchBar'
import styles from './layout.module.scss'
import Footer from './footer/Footer'
import SesionMenu from './sesionMenu/SesionMenu'

const Layout = ({ children }) => {

  const [show, setShow] = useState(false)

  return (
    <>
      <Aside />
      <div className={styles.rightContainer}>
        <SearchBar menu={setShow} show={show} />
        {show ? <SesionMenu setShow={setShow} /> : null}
        <main className={styles.mainContent}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
