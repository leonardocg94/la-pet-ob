import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

//Componente que sube el scroll hasta arriba cada que se cambia de ruta
const ScrollTotop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollTotop