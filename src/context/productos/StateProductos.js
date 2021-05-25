import React, { useReducer } from 'react'
import contextProductos from './contextProductos'
import reducerProductos from './reducerProductos'
import {
  SELECCIONAR_PRODUCTO,
  BUSCAR_PRODUCTOS,
  FIJAR_SEARCH,
  FILTROS_PRODUCTO
} from '../../types/productsTypes'

//Estado global de los productos
const StateProductos = ({ children }) => {
  //Estado inicial de los productos
  const initialState = {
    productos: [],
    search: undefined,
    selectedProduct: undefined
  }

  //Inicializacion del reducer para manejar el estado
  const [state, dispatch] = useReducer(reducerProductos, initialState)

  //fetch productos
  const fetchProductos = async category => {
    try {
      const response = await fetch(process.env.REACT_APP_BK_HOST + '/producto/listar/' + category.toLowerCase())
      const data = await response.json()
      dispatch({
        type: BUSCAR_PRODUCTOS,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  //Selecciona un producto y carga sus imagenes para mostrarlo en detalle
  const selectProduct = async proid => {
    try {
      const response = await fetch(process.env.REACT_APP_BK_HOST+"/producto/seleccionar/" + proid)
      const data = await response.json()
      const imgSty = {
        height: '100%',
        verticalAlign: 'top',
        objectFit: 'cover',
        margin: '0 auto',
        display: 'block',
        borderRadius: '3px'
      }
      const imgs = []
      for (let i = 1; i < 5; i++)
        imgs.push({
          id: i,
          item: <img style={imgSty} src={`${data.imagen}/${data.nombre}/${i}.jpg`} alt={`${data.nombre}_${i}`} />
        })

      dispatch({
        type: SELECCIONAR_PRODUCTO,
        payload: { product: data, imgs }
      })
    } catch (error) {
      console.log(error)
    }
  }

  //Filtra los productos por busqueda
  const searchProducts = async str => {
    try {
      const response = await fetch(process.env.REACT_APP_BK_HOST+'/producto/buscar?search=' + str)
      const data = await response.json()
      dispatch({
        type: BUSCAR_PRODUCTOS,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  //Selecciona la categoria del catalogo
  const setSearch = str => {
    dispatch({
      type: FIJAR_SEARCH,
      payload: str
    })
  }

  //filtrar productos 
  const filtProducts = async obj => {
    // elimina los cm del tamaño
    if (obj.tamaño)
      obj.tamaño = obj.tamaño.match(/[0-9]/g).join('')

    const url = process.env.REACT_APP_BK_HOST+"/producto/filtrar?"
    let params = ''
    Object.keys(obj).forEach((p, i) => {
      if (i === 0)
        params += `${p}=${obj[p]}`
      else
        params += `&${p}=${obj[p]}`
    })
    try {
      const response = await fetch(url + params)
      const data = await response.json()
      dispatch({
        type: FILTROS_PRODUCTO,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <contextProductos.Provider
      value={{
        productos: state.productos,
        search: state.search,
        selectedProduct: state.selectedProduct,
        selectProduct,
        searchProducts,
        filtProducts,
        fetchProductos,
        setSearch
      }}
    >
      {children}
    </contextProductos.Provider>
  )
}

export default StateProductos
