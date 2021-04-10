import React from 'react'
import styles from './button.module.scss'

const Button = ({text, color}) => {
  const {btn, btnWhite, btnPurple} = styles
  return (
    <button className={color ? [btn,btnPurple].join(' ') : [btn,btnWhite].join(' ')}>
      {text}
    </button>
  )
}

export default Button
