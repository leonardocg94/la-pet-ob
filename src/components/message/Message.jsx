import React from 'react'
import styles from './message.module.scss'

const Message = ({texto, tipo}) => {
  let sty = [styles.message]
  if(tipo) sty.push(styles[tipo])
  return (
    <p className={sty.join(' ')}>
      {texto}
    </p>
  )
}

export default Message
