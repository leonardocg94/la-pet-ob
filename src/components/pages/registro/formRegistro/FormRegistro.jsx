import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import contextUsuario from '../../../../context/usuario/contextUsuario'
import styles from './formRegistro.module.scss'
import FormGroup from '../../../formGroup/FormGroup'
import Message from '../../../message/Message'

const FormRegistro = () => {

  const initialState = {
    nombre: '',
    email: '',
    password: '',
    cpassword: ''
  }

  const errorInitialState = {
    show: false,
    message: '',
    err: ''
  }

  const history = useHistory()

  const uContext = useContext(contextUsuario)
  const { registrarUsuario } = uContext

  const [form, setForm] = useState(initialState)
  const { nombre, email, password, cpassword } = form

  const [messg, setMessg] = useState(errorInitialState)
  const { show, message, err } = messg

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

  const changeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = e => {
    e.preventDefault()
    if (nombre === '' || email === '' || password === '' || cpassword === '') {
      setMessg({
        show: true,
        message: 'Los campos son obligatorios',
        err: 'error'
      })
      return
    }

    registrarUsuario({ name: nombre, email, password })
    setMessg({
      show: true,
      message: 'Usuario creado exitosamente',
      err: 'success'
    })

    setTimeout(() => {
      history.push('/sesion')
    }, 3000);

    setForm(initialState)
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      {show ? <Message texto={message} tipo={err} /> : null}
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
