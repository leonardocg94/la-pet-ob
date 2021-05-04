const reducerUsuario = (state, action) => {
  switch(action.type){
    case 'REGISTRAR':
      return{
        ...state,
        email: action.payload.email,
        password: action.payload.password
      }
    case 'INICIAR':
      return{
        ...state,
        loged: true
      }
    case 'CERRAR':
      return action.payload    
    default:
      return state
  }
}

export default reducerUsuario