import React, { useReducer } from 'react'
import contextUsuario from './contextUsuario'
import reducerUsuario from './reducerUsuario'
import { REGISTRAR_USUARIO } from '../../types/usuarioTypes'

const StateUsuario = ({ children }) => {

  const initialState = {
    id: '',
    loged: false
  }

  const [state, dispatch] = useReducer(reducerUsuario, initialState)

  const registrarUsuario = user => {
    dispatch({
      type: REGISTRAR_USUARIO,
      payload: user
    })
  }

  return (
    <contextUsuario.Provider
      value={{
        usuario: state.id,
        loged: state.loged,
        registrarUsuario
      }}
    >
      {children}
    </contextUsuario.Provider>
  )
}

export default StateUsuario
