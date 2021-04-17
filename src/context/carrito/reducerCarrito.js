import { AGREGAR_CARRITO, INCREMENTAR_ITEM, DECREMENTAR_ITEM, ACTUALIZAR_TOTAL, ELIMINAR_ITEM } from '../../types/carritoTypes'

const reducerCarrito = (state, action) => {
  switch (action.type) {
    case ACTUALIZAR_TOTAL:
      return {
        ...state,
        total: action.payload
      }
    case AGREGAR_CARRITO:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case ELIMINAR_ITEM:
      return {
        ...state,
        items: state.items.filter(ele => ele.id !== action.payload)
      }
    case INCREMENTAR_ITEM:
      return {
        ...state,
        items: state.items.map(ele => (
          ele.id === action.payload.id ? action.payload : ele
        ))
      }
    case DECREMENTAR_ITEM:
      return {
        ...state,
        items: state.items.map(ele => (
          ele.id === action.payload.id ? action.payload : ele
        ))
      }
    default:
      return state
  }
}

export default reducerCarrito