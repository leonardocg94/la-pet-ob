import React, { useState } from 'react'
import SingleFiltro from './singleFiltro/SingleFiltro'
import ColorFilter from './colorFilter/ColorFilter'
import styles from './groupFiltro.module.scss'

const GroupFiltro = ({ nombre, categories, getValue, val }) => {

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
          ? [plusIcon, resIcon].join(' ')
          : [plusIcon].join(' ')
        }></span>
      </h3>
      <div onChange={getValue} id={nombre} className={drop
        ? [filtroContenedor, show].join(' ')
        : [filtroContenedor].join(' ')
      }>
        {categories.map(ele => {
          if(nombre === 'Color')
            return <ColorFilter 
              key={ele} 
              color={ele}
              val={val}
            />
          else {
            return <SingleFiltro 
              key={ele} 
              nombre={ele} 
              id={nombre}
              val={val}
            />
          }  
        })}
      </div>
    </div>
  )
}

export default GroupFiltro
