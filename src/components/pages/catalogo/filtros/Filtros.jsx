import React, { useState, useContext } from 'react'
import styles from './filtros.module.scss'
import contextProductos from '../../../../context/productos/contextProductos'
import GroupFiltro from './groupFiltro/GroupFiltro'
import { dbcategories } from '../../../../data/data'

//Componente filtros que contiene el manejador para mostrar u ocultar filtros
const Filtros = ({ show }) => {

  //Arreglo de categorias temporales
  const tempCategories = dbcategories

  //Estado inicial de los filtros
  const initialState = {
    Color: '',
    Tamaño: '',
    Tipo: ''
  }

  //Contexto de los productos con su atributo resetProductos
  const pContext = useContext(contextProductos)
  const { resetProducts } = pContext

  //Estado para manejar las categorias seleccionadas de los filtros
  const [categories, setCategories] = useState(initialState)
  const { Color, Tamaño, Tipo } = categories

  //Manejador del submit de filtros
  const handleSubmit = e => {
    e.preventDefault()
    show()
  }

  //Manejador para obtener el valor de los radiobuttons, es decir la categoria seleccionada
  const getValue = e => {
    setCategories({
      ...categories,
      [e.target.name]: e.target.value
    })
  }

  //Funcion que limpia los filtros seleccionados
  const clearFilters = () => {
    setCategories(initialState)
    resetProducts()
  }

  //Variable que contiene los diferentes tipos de filtros
  const filterItems = tempCategories.map(ele => {
    if (ele.nombre === 'Color')
      return <GroupFiltro val={Color} getValue={getValue} key={ele.nombre} {...ele} />
    else if (ele.nombre === 'Tamaño')
      return <GroupFiltro val={Tamaño} getValue={getValue} key={ele.nombre} {...ele} />
    else
      return <GroupFiltro val={Tipo} getValue={getValue} key={ele.nombre} {...ele} />
  })

  return (
    <form className={styles.formFilters} onSubmit={handleSubmit}>
      
      {filterItems}

      <button className={styles.btn} type='submit'>Filtrar</button>

      <button onClick={clearFilters} className={styles.btn}>
        Eliminar Filtros
      </button>

    </form>
  )
}

export default Filtros
