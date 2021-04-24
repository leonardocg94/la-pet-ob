import React from 'react'
// import styles from './filtros.module.scss'
import GroupFiltro from './groupFiltro/GroupFiltro'

const Filtros = () => {

  const tempCategories = [
    {
      nombre: 'Color',
      categories: ['rojo','azul','verde','gris','rubio','castaño','rosa','morado']
    },
    {
      nombre: 'Tamaño',
      categories: ['55cm','60cm','70cm']
    },
    {
      nombre: 'Tipo',
      categories: ['Lacefront','Simulacion de Raiz']
    }
  ]

  return (
    <div>
      {tempCategories.map(ele => (
        <GroupFiltro key={ele.nombre} {...ele}/>
      ))}
    </div>
  )
}

export default Filtros
