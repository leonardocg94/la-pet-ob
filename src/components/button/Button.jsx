import React from 'react'
import styles from './button.module.scss'
import { Link } from 'react-router-dom'

const Button = ({text, color, click, route}) => {
  const {btn, btnWhite, btnPurple} = styles
  return (
    <Link exact to={route} onClick={click} className={color ? [btn,btnPurple].join(' ') : [btn,btnWhite].join(' ')}>
      {text}
    </Link>
  )
}

export default Button
