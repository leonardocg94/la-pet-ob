import React, { useState } from 'react'

// import styles from './filtros.module.scss'
import GroupFiltro from './groupFiltro/GroupFiltro'

const Filtros = () => {

  const tempCategories = [
    {
      nombre: 'Color',
      categories: ['rojo', 'azul', 'verde', 'gris', 'rubio', 'castaño', 'rosa', 'morado']
    },
    {
      nombre: 'Tamaño',
      categories: ['55cm', '60cm', '70cm']
    },
    {
      nombre: 'Tipo',
      categories: ['Lacefront', 'Simulacion de Raiz']
    }
  ]

  const initialState = {
    Color: '',
    Tamaño: '',
    Tipo: '',
    cColor: undefined,
    cTamaño: undefined,
    cTipo: undefined
  }

  const [filts, setFilts] = useState(initialState)
  const { Color, Tamaño, Tipo, cColor, cTamaño, cTipo } = filts

  const handleSubmit = e => {
    e.preventDefault()
    setFilts(initialState)
  }

  const getValue = e => {
    console.log(e.target.checked);
    setFilts({
      ...filts,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {tempCategories.map(ele => {
        if(ele.nombre === 'Color') 
          return <GroupFiltro val={Color} ch={cColor} getValue={getValue} key={ele.nombre} {...ele} />
        else if(ele.nombre === 'Tamaño') 
          return <GroupFiltro val={Tamaño} ch={cTamaño} getValue={getValue} key={ele.nombre} {...ele} />
        else 
          return <GroupFiltro val={Tipo} ch={cTipo} getValue={getValue} key={ele.nombre} {...ele} />
      })}
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default Filtros
