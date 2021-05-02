import React, { useState, useEffect } from 'react'
import styles from './formSesion.module.scss'
import FormGroup from '../../../formGroup/FormGroup'
import Message from '../../../message/Message'

const FormSesion = () => {

  const initialState = {
    email: '',
    password: ''
  }

  const errorInitialState = {
    show: false,
    message: '',
    err: ''
  }

  const [form, setForm] = useState(initialState)
  const { email, password } = form

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

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      {show ? <Message texto={message} tipo={err} /> : null}
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
