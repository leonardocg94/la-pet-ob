import React, { useState, useContext } from 'react'
import contextProductos from '../../../context/productos/contextProductos'
import contextCarrito from '../../../context/carrito/contextCarrito'
import { useHistory } from 'react-router-dom'
import styles from './searchbar.module.scss'

//Componente barra de busqueda que recibe el estado y el manejador para ocultar el menu de sesion
const SearchBar = ({ show, setShow }) => {

  //componente donde se guarda el valor del input de busqueda
  const [searchVal, setSearchval] = useState('')

  //variable history para cambiar de ruta
  const history = useHistory()

  //Contexto de productos y contexto de carrito
  const pContext = useContext(contextProductos)
  const cContext = useContext(contextCarrito)
  const { noItems } = cContext
  const { filtProducts } = pContext

  //manejador de cambio en el input de busqueda
  const searchHandler = e => { setSearchval(e.target.value) }

  //manejador del submit de la busqueda
  const submitHandler = e => {
    e.preventDefault()
    if (searchVal === '')
      return
    const auxVal = searchVal.toLocaleLowerCase()
    filtProducts(auxVal)
    setSearchval('')
    history.push('/catalogo')
  }

  //redireccionamiento al carrito al clickear el icono de carrito
  const carritoHandler = () => { history.push('/carrito') }

  //manejo del menu de sesion al clickear el icono de usuario
  const menuHandler = () => {
    const auxShow = !show
    setShow(auxShow)
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

        <p onClick={menuHandler} className={styles.userIcon}>
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
