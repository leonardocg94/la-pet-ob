import React, { useReducer, useEffect } from 'react'
import contextCarrito from './contextCarrito'
import reducerCarrito from './reducerCarrito'
import { AGREGAR_CARRITO, INCREMENTAR_ITEM, DECREMENTAR_ITEM, ACTUALIZAR_TOTAL, ELIMINAR_ITEM } from '../../types/carritoTypes'

const StateCarrito = ({ children }) => {

  const initialState = {
    items: [],
    total: 0,
    noItems: 0
  }

  const [state, dispatch] = useReducer(reducerCarrito, initialState)

  useEffect(() => {
    updateTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.items])

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
  }

  const addItem = pro => {
    let check = false
    let editPro = null
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === pro.id) {
        check = true
        editPro = { ...state.items[i] }
        break
      }
    }
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

  const delItem = id => {
    dispatch({
      type: ELIMINAR_ITEM,
      payload: id
    })
  }

  const incrementItem = id => {
    let editPro = state.items.filter(ele => ele.id === id)[0]
    editPro.cantidad++
    dispatch({
      type: INCREMENTAR_ITEM,
      payload: editPro
    })
  }

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
