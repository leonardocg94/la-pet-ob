import React from 'react'
import styles from './message.module.scss'

const Message = ({texto, tipo}) => {

  return (
    <p className={[styles.message,styles[tipo]].join(' ')}>
      {texto}
    </p>
  )
}

export default Message
