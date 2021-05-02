import React, { useReducer, useEffect } from 'react'
import contextCarrito from './contextCarrito'
import reducerCarrito from './reducerCarrito'
import { AGREGAR_CARRITO, INCREMENTAR_ITEM, DECREMENTAR_ITEM, ACTUALIZAR_TOTAL, ELIMINAR_ITEM } from '../../types/carritoTypes'

//Estado global del carrito de compras
const StateCarrito = ({ children }) => {

  //Estado inicial del carrito
  const initialState = JSON.parse(localStorage.getItem('carPetOb')) 
  || {
    items: [],
    total: 0,
    noItems: 0
  }

  //Inicializacion del reducer para el carrito
  const [state, dispatch] = useReducer(reducerCarrito, initialState)

  //Cada que cambia el numero de items se actualiza el total de dinero
  useEffect(() => {
    updateTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.items])

  //Funcion que actualiza el total de dinero
  const updateTotal = () => {
    let total = 0
    let noItems = 0
    state.items.forEach(item => {
      total += item.precio * item.cantidad
      noItems += item.cantidad
    })

    dispatch({
      type: ACTUALIZAR_TOTAL,
      payload: { total, noItems }
    })
    localStorage.setItem('carPetOb', JSON.stringify(state))
  }

  //Funcion que agrega un producto al carrito
  const addItem = pro => {
    let check = false
    let editPro = null
    //Verifica si el item a agregar ya existe en el carrito
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === pro.id) {
        check = true
        editPro = { ...state.items[i] }
        break
      }
    }
    //Si ya existe el item solo se incrementa la cantidad, sino se agrega
    if (check) {
      editPro.cantidad++
      dispatch({
        type: INCREMENTAR_ITEM,
        payload: editPro
      })
    } else {
      dispatch({
        type: AGREGAR_CARRITO,
        payload: pro
      })
    }
  }

  //Elimina un item del carrito
  const delItem = id => {
    dispatch({
      type: ELIMINAR_ITEM,
      payload: id
    })
  }

  //Incrementa la cantidad de un item en el carrito
  const incrementItem = id => {
    let editPro = state.items.filter(ele => ele.id === id)[0]
    editPro.cantidad++
    dispatch({
      type: INCREMENTAR_ITEM,
      payload: editPro
    })
  }

  //Decrementa la cantidad de un item en el carrito, si es uno se elimina
  const decrementItem = id => {
    const editPro = state.items.filter(ele => ele.id === id)[0]
    if (editPro.cantidad - 1 <= 0) {
      delItem(id)
    } else {
      editPro.cantidad--
      dispatch({
        type: DECREMENTAR_ITEM,
        payload: editPro
      })
    }
  }

  return (
    <contextCarrito.Provider
      value={{
        carItems: state.items,
        total: state.total,
        noItems: state.noItems,
        addItem,
        incrementItem,
        decrementItem,
        delItem
      }}
    >
      {children}
    </contextCarrito.Provider>
  )
}

export default StateCarrito
