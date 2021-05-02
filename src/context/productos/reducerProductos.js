import { 
  SELECCIONAR_PRODUCTO,
  BUSCAR_PRODUCTOS,
  REINICIAR_PRODUCTOS } from '../../types/productsTypes'

const reducerProyectos = (state,action) => {
  switch(action.type) {
    case SELECCIONAR_PRODUCTO:
      return {
        ...state,
        selectedProduct: action.payload
      }
    case BUSCAR_PRODUCTOS:
      return {
        ...state,
        productos: action.payload
      }  
    case REINICIAR_PRODUCTOS:
      return {
        ...action.payload
      }
    default:
      return state
  }
}

export default reducerProyectos