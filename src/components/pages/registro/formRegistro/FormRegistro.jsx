import React, { useState, useEffect } from 'react'
import styles from './formRegistro.module.scss'
import FormGroup from '../../../formGroup/FormGroup'
import Message from '../../../message/Message'

//Componente del formulario de registro
const FormRegistro = () => {
  //Estado inicial de los inputs del registro
  const initialState = {
    nombre: '',
    email: '',
    password: '',
    cpassword: ''
  }

  //Estado inicial del posible mensaje del registro
  const errorInitialState = {
    show: false,
    message: '',
    err: ''
  }

  //Estado de los inputs del registro y su destructuracion
  const [form, setForm] = useState(initialState)
  const { nombre, email, password, cpassword } = form
  //Estado del mensaje y su destructuracion
  const [messg, setMessg] = useState(errorInitialState)
  const { show, message, err } = messg

  //Cuando un mensaje es desplegado se elimina a los 3 segundos
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

  //Maneja el onchange de los inputs
  const changeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  //Maneja el submit del formulario
  const submitHandler = e => {
    e.preventDefault()
    if (!nombre || !email || !password || !cpassword)  {
      setMessg({
        show: true,
        message: 'Los campos son obligatorios',
        err: 'error'
      })
      return
    }

    localStorage.setItem('authPetOb',JSON.stringify({
      email,
      password
    }))

    setMessg({
      show: true,
      message: 'Usuario creado exitosamente',
      err: 'success'
    })

    setForm(initialState)
  }

  //Variable del despliegue condicional del mensaje
  const mssg = show ? <Message texto={message} tipo={err} /> : null

  return (
    <form onSubmit={submitHandler} className={styles.form}>

      {mssg}

      <div className={styles.formOption}>
        <FormGroup
          ptype='text'
          pname='nombre'
          pholder='Nombre'
          change={changeHandler}
          val={nombre}
        />
      </div>

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

      <div className={styles.formOption}>
        <FormGroup
          ptype='password'
          pname='cpassword'
          pholder='Confirmar contraseña'
          change={changeHandler}
          val={cpassword}
        />
      </div>
      
      <button className={styles.btnSubmit} type='submit'>
        Obtener Cuenta
      </button>
    </form>
  )
}

export default FormRegistro
