import React from 'react'
import styles from './searchbar.module.scss'

const SearchBar = () => {
  return (
    <header className={styles.searchBar} >
      <div className={styles.leftSide}>
        <p className={styles.searchIcon}>
          <i className="fas fa-search"></i>
        </p>
        <input className={styles.searchInput} type="search" placeholder='BUSCAR...'/>
      </div>
      <div className={styles.rightSide}>
        <p className={styles.userIcon}>
          <i className="fas fa-user-circle"></i>
        </p>
        <p className={styles.shoppingCartIcon} >
          <i className="fas fa-shopping-cart"></i>
        </p>
      </div>
    </header>
  )
}

export default SearchBar
