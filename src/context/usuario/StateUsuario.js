import React, { useReducer } from 'react'
import contextUsuario from './contextUsuario'
import reducerUsuario from './reducerUsuario'

const StateUsuario = ({ children }) => {

  const initialState = JSON.parse(localStorage.getItem('authPetOb')) 
  || {
    loged: false,
    email: '',
    password: ''
  }

  const [state, dispatch] = useReducer(reducerUsuario, initialState)

  const registrar = user => {
    dispatch({
      type: 'REGISTRAR',
      payload: user
    })
  }

  const iniciar = user => {
    if(!state.email || !state.password)
      return {
        complete: false,
        error: {
          show:true,
          message: 'Primero necesitas registrarte',
          err: 'error'
        }
      }

    if(user.email !== state.email || user.password !== state.password)
      return {
        complete: false,
        error: {
          show:true,
          message: 'Credenciales Invalidas',
          err: 'error'
        }
      }

    user.loged = true  
    localStorage.setItem('authPetOb', JSON.stringify(user))
    dispatch({
      type: 'INICIAR'
    }) 
    return {
      complete: true
    }
  }

  const cerrar = () => {
    localStorage.removeItem('authPetOb')
    dispatch({
      type: 'CERRAR',
      payload: initialState
    })
  }

  return (
    <contextUsuario.Provider
      value={{
        user: state,
        registrar,
        iniciar,
        cerrar
      }}
    >
      {children}
    </contextUsuario.Provider>
  )
}

export default StateUsuario
