import React, { useState, useContext } from 'react'
import contextProductos from '../../../context/productos/contextProductos'
import { useHistory } from 'react-router-dom'
import styles from './searchbar.module.scss'

const SearchBar = () => {
  const history = useHistory()
  const [searchVal, setSearchval] = useState('')

  const pContext = useContext(contextProductos)
  const { filtProducts } = pContext

  const searchHandler = e => { setSearchval(e.target.value) }

  const submitHandler = () => {
    if(searchVal === '')
      return
    const auxVal = searchVal.toLocaleLowerCase()
    filtProducts(auxVal)  
    history.push('/catalogo')
  }

  const carritoHandler = () => {
    history.push('/carrito')
  }

  return (
    <header className={styles.searchBar} >
      <div className={styles.leftSide}>
        <p onClick={submitHandler} className={styles.searchIcon}>
          <i className="fas fa-search"></i>
        </p>
        <input onChange={searchHandler} className={styles.searchInput} type="search" placeholder='Nombre o Color...' />
      </div>
      <div className={styles.rightSide}>
        <p className={styles.userIcon}>
          <i className="fas fa-user-circle"></i>
        </p>
        <p onClick={carritoHandler} className={styles.shoppingCartIcon} >
          <i className="fas fa-shopping-cart"></i>
        </p>
      </div>
    </header>
  )
}

export default SearchBar
