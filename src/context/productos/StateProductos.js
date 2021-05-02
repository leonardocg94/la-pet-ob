import React, { useReducer } from 'react'
import contextProductos from './contextProductos'
import reducerProductos from './reducerProductos'
import { dbproductos } from '../../data/data'
import {
  SELECCIONAR_PRODUCTO,
  BUSCAR_PRODUCTOS,
  REINICIAR_PRODUCTOS,
  FIJAR_CATEGORIA
} from '../../types/productsTypes'

//Estado global de los productos
const StateProductos = ({ children }) => {
  //Estado inicial de los productos
  const initialState = {
    productos: dbproductos,
    search: null,
    selectedProduct: null,
    noAllItems: dbproductos.length
  }

  //Inicializacion del reducer para manejar el estado
  const [state, dispatch] = useReducer(reducerProductos, initialState)

  //Selecciona un producto y carga sus imagenes para mostrarlo en detalle
  const selectProduct = proid => {
    const product = (state.productos.filter(ele => ele.id === proid))[0]
    const imgs = []
    const imgSty = {
      height: '100%',
      verticalAlign: 'top',
      objectFit: 'cover',
      margin: '0 auto',
      display: 'block',
      borderRadius: '3px'
    }

    if (product) {
      const { id, nombre, tipo } = product
      for (let i = 1; i < 5; i++) {
        const img = <img
          src={require(`../../img/${tipo}/${id}_${nombre}/${i}.jpg`).default}
          alt={`Peluca ${nombre}`}
          style={imgSty}
        />
        imgs.push({
          id: i,
          item: img
        })
      }
    } else {
      dispatch({
        type: SELECCIONAR_PRODUCTO,
        payload: null
      })
      return
    }

    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: { product, imgs }
    })
  }

  //Filtra los productos por busqueda
  const searchProducts = str => {
    const aux = dbproductos.filter(ele => (
      ele.caracteristicas.descripcion.toLowerCase().includes(str)
      || ele.nombre.toLowerCase().includes(str)
      || ele.caracteristicas.color.toLowerCase().includes(str)
      || ele.caracteristicas.tipo.toLowerCase().includes(str)
    ))
    
    dispatch({
      type: BUSCAR_PRODUCTOS,
      payload: [...aux]
    })
  }

  //reinicia los productos filtrados
  const resetProducts = () => {
    dispatch({
      type: REINICIAR_PRODUCTOS,
      payload: initialState
    })
  }

  //Selecciona la categoria del catalogo
  const setCategory = cat => {
    dispatch({
      type: FIJAR_CATEGORIA,
      payload: cat
    })
  }

  return (
    <contextProductos.Provider
      value={{
        productos: state.productos,
        search: state.search,
        selectedProduct: state.selectedProduct,
        noAllItems: state.noAllItems,
        selectProduct,
        searchProducts,
        resetProducts,
        setCategory
      }}
    >
      {children}
    </contextProductos.Provider>
  )
}

export default StateProductos
