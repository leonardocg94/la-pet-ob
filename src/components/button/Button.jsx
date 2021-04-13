import React from 'react'
import styles from './button.module.scss'
import { NavLink } from 'react-router-dom'

const Button = ({text, color, click, route}) => {
  const {btn, btnWhite, btnPurple} = styles
  return (
    <NavLink exact to={route} onClick={click} className={color ? [btn,btnPurple].join(' ') : [btn,btnWhite].join(' ')}>
      {text}
    </NavLink>
  )
}

export default Button
