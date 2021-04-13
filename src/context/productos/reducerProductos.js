import { SELECCIONAR_PRODUCTO } from '../../types/productsTypes'

const reducerProyectos = (state,action) => {
  switch(action.type) {
    case SELECCIONAR_PRODUCTO:
      return {
        ...state,
        productoSeleccionado: (state.productos.filter(ele => 
          ele.id === action.payload
        ))[0]
      }
    default:
      return state
  }
}

export default reducerProyectos