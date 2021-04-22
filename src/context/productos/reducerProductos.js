import { 
  SELECCIONAR_PRODUCTO,
  BUSCAR_PRODUCTOS,
  REINICIAR_PRODUCTOS } from '../../types/productsTypes'

const reducerProyectos = (state,action) => {
  switch(action.type) {
    case SELECCIONAR_PRODUCTO:
      return {
        ...state,
        search: action.payload
      }
    case BUSCAR_PRODUCTOS:
      return {
        ...state,
        filteredProducts: state.productos.filter(ele => (
          ele.caracteristicas.descripcion.toLowerCase().includes(action.payload)
          || ele.nombre.toLowerCase().includes(action.payload)
          || ele.caracteristicas.color.toLowerCase().includes(action.payload)
          || ele.caracteristicas.tipo.toLowerCase().includes(action.payload)
        ))
      }  
    case REINICIAR_PRODUCTOS:
      const auxProd = [...state.productos]  
      return {
        ...state,
        filteredProducts: auxProd
      }  
    default:
      return state
  }
}

export default reducerProyectos