import React, { useState } from 'react'
import SingleFiltro from './singleFiltro/SingleFiltro'
import ColorFilter from './colorFilter/ColorFilter'
import styles from './groupFiltro.module.scss'

//Componente que contiene los filtros de una misma categoria, recibe el nombre de la categoria los diferentes filtros, el manejador para obtener su valor en cada cambio y el valor del manejador para poder resetear los radiobuttos
const GroupFiltro = ({ nombre, categories, getValue, val }) => {
  //Estado que maneja si se muestra o no una categoria en dispositivos moviles
  const [drop, setDrop] = useState(false)

  //Manejador del depliegue de cada categoria
  const dropHandler = () => {
    const auxDrop = !drop
    setDrop(auxDrop)
  }

  //Variables para las estylos condicionales de el icono de la categoria y el despliegue de los filtros de la categoria
  let iconClasses
  let filtContainerClasses
  if (drop) {
    iconClasses = [styles.plusIcon, styles.resIcon].join(' ')
    filtContainerClasses = [styles.filtroContenedor, styles.show].join(' ')
  } else {
    iconClasses = styles.plusIcon
    filtContainerClasses = styles.filtroContenedor
  }

  //Variable que contiene los filtros de la categoria
  const categoryItems = categories.map(ele => {
    if (nombre === 'color')
      return <ColorFilter
        key={ele}
        color={ele}
        val={val}
        getValue={getValue}
      />
    else {
      return <SingleFiltro
        key={ele}
        nombre={ele}
        id={nombre}
        val={val}
        getValue={getValue}
      />
    }
  })

  return (
    <div className={styles.groupFiltro}>

      <h3 onClick={dropHandler} className={styles.nombreFiltro}>
        {nombre.charAt(0).toUpperCase()+nombre.slice(1)}
        <span className={iconClasses}></span>
      </h3>

      <div id={nombre} className={filtContainerClasses}>
        {categoryItems}
      </div>
      
    </div>
  )
}

export default GroupFiltro
