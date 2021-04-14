import { SELECCIONAR_PRODUCTO } from '../../types/productsTypes'

const reducerProyectos = (state,action) => {
  switch(action.type) {
    case SELECCIONAR_PRODUCTO:
      return {
        ...state,
        productoSeleccionado: action.payload
      }
    default:
      return state
  }
}

export default reducerProyectos