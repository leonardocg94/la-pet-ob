import React, { useState } from 'react'
import Aside from './aside/Aside'
import SearchBar from './searchBar/SearchBar'
import styles from './layout.module.scss'
import Footer from './footer/Footer'
import SesionMenu from './sesionMenu/SesionMenu'

//componente que funciona como layout principal, recibe el componente principal a renderizar como himo
const Layout = ({ children }) => {
  //Estado que maneja mostrar y ocultar el menu de sesion desde el propio menu y el search bar
  const [show, setShow] = useState(false)
  //condicional para mostrar el menu de sesion
  const sessMenu = show ? <SesionMenu setShow={setShow} /> : null
  return (
    <>
      <Aside />
      <div className={styles.rightContainer}>
        <SearchBar menu={setShow} show={show} />
        {sessMenu}
        <main className={styles.mainContent}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
