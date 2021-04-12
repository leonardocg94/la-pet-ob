import React from 'react'
// import styles from './filtros.module.scss'
import GroupFiltro from './groupFiltro/GroupFiltro'

const Filtros = () => {

  const tempCategories = [
    {
      nombre: 'Color',
      categories: ['Rojo','Azul','Verde','Blanco','Rubio','Castaño','Rosa','Plata']
    },
    {
      nombre: 'Tamaño',
      categories: ['55','60','70']
    },
    {
      nombre: 'Peinado',
      categories: ['Lacio','Rizado','Chino','Ondulado']
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
