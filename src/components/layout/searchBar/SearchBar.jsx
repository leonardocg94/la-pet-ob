import React, { useState, useContext } from 'react'
import contextProductos from '../../../context/productos/contextProductos'
import contextCarrito from '../../../context/carrito/contextCarrito'
import { useHistory } from 'react-router-dom'
import styles from './searchbar.module.scss'

const SearchBar = ({ show, menu, btn }) => {
  const [searchVal, setSearchval] = useState('')

  const history = useHistory()

  const pContext = useContext(contextProductos)
  const cContext = useContext(contextCarrito)
  const { noItems } = cContext
  const { filtProducts } = pContext

  const searchHandler = e => { setSearchval(e.target.value) }

  const submitHandler = e => {
    e.preventDefault()
    if (searchVal === '')
      return
    const auxVal = searchVal.toLocaleLowerCase()
    filtProducts(auxVal)
    setSearchval('')
    history.push('/catalogo')
  }

  const carritoHandler = () => {
    history.push('/carrito')
  }

  const menuHandler = () => {
    const auxShow = !show
    menu(auxShow)
  }

  return (
    <header className={styles.searchBar} >
      <form onSubmit={submitHandler} className={styles.leftSide}>
        <button type='submit' className={styles.searchIcon}>
          <i className="fas fa-search"></i>
        </button>
        <input
          onChange={searchHandler}
          className={styles.searchInput}
          type="search"
          placeholder='Nombre o Color...'
          value={searchVal}
        />
      </form>
      <div className={styles.rightSide}>
        <p ref={btn} onClick={menuHandler} className={styles.userIcon}>
          <i className="fas fa-user-circle"></i>
        </p>
        <p onClick={carritoHandler} className={styles.shoppingCartIcon} >
          <i className="fas fa-shopping-cart"></i>
          <span className={styles.count}>{noItems}</span>
        </p>
      </div>
    </header>
  )
}

export default SearchBar
