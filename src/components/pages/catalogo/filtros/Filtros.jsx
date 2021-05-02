import React, { useState, useContext } from 'react'
import styles from './filtros.module.scss'
import contextProductos from '../../../../context/productos/contextProductos'
import GroupFiltro from './groupFiltro/GroupFiltro'

const Filtros = ({ show }) => {

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
    Tipo: ''
  }

  const pContext = useContext(contextProductos)
  const { resetProducts } = pContext

  const [filts, setFilts] = useState(initialState)
  const { Color, Tamaño, Tipo } = filts

  const handleSubmit = e => {
    e.preventDefault()
    show()
  }

  const getValue = e => {
    setFilts({
      ...filts,
      [e.target.name]: e.target.value
    })
  }

  const clearFilters = () => {
    setFilts(initialState)
    resetProducts()
  }

  return (
    <form className={styles.formFilters} onSubmit={handleSubmit}>
      {tempCategories.map(ele => {
        if (ele.nombre === 'Color')
          return <GroupFiltro val={Color} getValue={getValue} key={ele.nombre} {...ele} />
        else if (ele.nombre === 'Tamaño')
          return <GroupFiltro val={Tamaño} getValue={getValue} key={ele.nombre} {...ele} />
        else
          return <GroupFiltro val={Tipo} getValue={getValue} key={ele.nombre} {...ele} />
      })}
      <button className={styles.btn} type='submit'>Filtrar</button>
      <button onClick={clearFilters} className={styles.btn}>
        Eliminar Filtros
      </button>
    </form>
  )
}

export default Filtros
