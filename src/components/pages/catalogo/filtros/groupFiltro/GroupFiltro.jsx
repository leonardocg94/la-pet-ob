import React, { useState } from 'react'
import SingleFiltro from './singleFiltro/SingleFiltro'
import styles from './groupFiltro.module.scss'

const GroupFiltro = ({ nombre, categories }) => {

  const { groupFiltro, nombreFiltro, filtroContenedor, plusIcon,
    resIcon, show } = styles

  const [drop, setDrop] = useState(false)  

  const dropHandler = () => {
    const auxDrop = !drop
    setDrop(auxDrop)
  }

  return (
    <div className={groupFiltro}>
      <h3 onClick={dropHandler} className={nombreFiltro}>
        {nombre}
        <span className={drop 
          ? [plusIcon,resIcon].join(' ')
          : [plusIcon].join(' ')
        }></span>
      </h3>
      <div className={drop 
        ? [filtroContenedor,show].join(' ')
        : [filtroContenedor].join(' ')
      }>
        {categories.map(ele => (
          <SingleFiltro key={ele} nombre={ele} id={ele} />
        ))}
      </div>
    </div>
  )
}

export default GroupFiltro
