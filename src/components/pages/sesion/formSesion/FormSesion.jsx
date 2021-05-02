import React, { useState, useEffect } from 'react'
import styles from './formSesion.module.scss'
import FormGroup from '../../../formGroup/FormGroup'
import Message from '../../../message/Message'

//Componente del formulario para iniciar sesion
const FormSesion = () => {
  //Estado inicial de los inputs
  const initialState = {
    email: '',
    password: ''
  }

  //Estado inicial de un posible mensaje
  const errorInitialState = {
    show: false,
    message: '',
    err: ''
  }

  //Estado de los inputs y su destructuracion
  const [form, setForm] = useState(initialState)
  const { email, password } = form
  //Estado del mensaje y su destructuracion
  const [messg, setMessg] = useState(errorInitialState)
  const { show, message, err } = messg

  //Si un mensaje esta desplegado se borra a los 3 segundos
  useEffect(() => {
    let mounted = true
    if (show) {
      setTimeout(() => {
        if (mounted)
          setMessg(errorInitialState)
      }, 3000);
      return () => {
        mounted = false
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  //Manejador del onchange de los inputs
  const changeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  //Manejador del submit del formulario
  const submitHandler = e => {
    e.preventDefault()
    if (email === '' || password === '') {
      setMessg({
        show: true,
        message: 'Los campos son obligatorios',
        err: 'error'
      })
      return
    }
    setForm(initialState)
  }

  //Variable del despliegue condicional del mensaje
  const mssg = show ? <Message texto={message} tipo={err} /> : null

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      {mssg}

      <div className={styles.formOption}>
        <FormGroup
          ptype='email'
          pname='email'
          pholder='Email'
          change={changeHandler}
          val={email}
        />
      </div>

      <div className={styles.formOption}>
        <FormGroup
          ptype='password'
          pname='password'
          pholder='Contraseña'
          change={changeHandler}
          val={password}
        />
      </div>

      <button className={styles.btnSubmit} type='submit'>
        Iniciar Sesion
      </button>
    </form>
  )
}

export default FormSesion
