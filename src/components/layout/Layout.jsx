import React from 'react'
import Aside from './aside/Aside'
import SearchBar from './searchBar/SearchBar'
import styles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Aside/>
      <div className={styles.rightContainer}>
        <SearchBar/>
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
