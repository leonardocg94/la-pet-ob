import React from 'react'
import ReactDOM from 'react-dom'
import styles from './message.module.scss'

//componente mensaje global, recibe el texto a mostrar y el tipo de mensaje(error o success)
const Message = ({ texto, tipo }) => {
  //estilos del mensaje
  const messageClasses = tipo ? [styles.message, styles[tipo]] : [styles.message, styles.success]

  return (
    <>
      {ReactDOM.createPortal(
        <p className={messageClasses.join(' ')}>
          {texto}
        </p>,
        document.getElementById('pop')
      )}
    </>
  )
}

export default Message
