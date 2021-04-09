import React from 'react'
import Aside from './aside/Aside'
import SearchBar from './searchBar/SearchBar'
import styles from './layout.module.scss'
import Footer from './footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Aside/>
      <div className={styles.rightContainer}>
        <SearchBar/>
        <main className={styles.mainContent}>
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
