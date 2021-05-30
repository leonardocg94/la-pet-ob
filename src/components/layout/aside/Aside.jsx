import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './aside.module.scss'
import Menu from '../../menu/Menu'
import Socials from './socials/Socials'

//componente que contiene la navegación principal como un aside
const Aside = () => {

  //estado que maneja el despliegue del menu en dispositivos moviles
  const [addclass, setAddClass] = useState(false)
  //Manjador de despliegue del menu
  const showMenu = () => {
    const auxClass = !addclass
    setAddClass(auxClass)
  }
  //Cierra el menu
  const hideMenu = () => {
    setAddClass(false)
  }
  //classes del menu para mostrar u ocultar
  let asideClasses
  let iconClasses
  let bottomContainerClasses
  if (addclass) {
    asideClasses = [styles.navigation, styles.showNavigation]
    iconClasses = [styles.barsAnimated, styles.crossAnimated]
    bottomContainerClasses = [styles.bottomContainer, styles.showBottomcontainer]
  } else {
    asideClasses = [styles.navigation]
    iconClasses = [styles.barsAnimated]
    bottomContainerClasses = [styles.bottomContainer]
  }

  return (
    <aside
      className={asideClasses.join(' ')}
    >
      <div className={styles.topContainer}>
        <Link onClick={hideMenu} className={styles.storeName} to='/'>
          <h1>La Petite Obsession</h1>
        </Link>

        <button aria-label='Main menu' onClick={showMenu} className={styles.btnMenu}>
          <span className={iconClasses.join(' ')}></span>
        </button>
      </div>
      <div className={bottomContainerClasses.join(' ')}>
        <Menu click={hideMenu} />
        <Socials/>
      </div>
    </aside>
  )
}

export default Aside
