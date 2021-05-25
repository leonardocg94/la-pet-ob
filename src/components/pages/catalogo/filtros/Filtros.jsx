import React, { useState, useContext, useEffect } from 'react'
import styles from './filtros.module.scss'
import contextProductos from '../../../../context/productos/contextProductos'
import GroupFiltro from './groupFiltro/GroupFiltro'
import { dbcategories } from '../../../../data/data'
import Message from '../../../message/Message'
import { useParams } from 'react-router'

//Componente filtros que contiene el manejador para mostrar u ocultar filtros
const Filtros = ({ show }) => {

  //Arreglo de categorias temporales
  const tempCategories = dbcategories

  //Estado inicial de los filtros
  const initialState = {}
  //inicializar el estado inicial
  tempCategories.forEach(pro => {
    initialState[pro.nombre] = ''
  })


  //Estado inicial para el mensaje
  const messageInitialState = {
    showup: false,
    mensaje: '',
    err: ''
  }

  const catgry = useParams().category

  //Contexto de los productos con su atributo resetProductos
  const pContext = useContext(contextProductos)
  const { filtProducts, fetchProductos } = pContext

  //Estado para manejar las categorias seleccionadas de los filtros
  const [categories, setCategories] = useState(initialState)
  //Estado para el mensaje y su destructuracion
  const [message, setMessage] = useState(messageInitialState)
  const { showup, err, mensaje } = message

  //Manejador del submit de filtros
  const handleSubmit = e => {
    e.preventDefault()
    if (Object.keys(categories).every(cat => !categories[cat])) {
      setMessage({
        showup: true,
        mensaje: 'Elija al menos un filtro',
        err: 'error'
      })
      return
    }

    const obj = {}
    for(let key in categories)
      if(categories[key]){
        if(key === 'tipo')
          obj[key+'_peluca'] = categories[key]  
        else  
          obj[key] = categories[key]  
      }

    filtProducts(obj)
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
    fetchProductos(catgry)
  }

  //Elimina el mensaje en 3 segundos si es mostrado
  useEffect(() => {
    let mounted = true
    setTimeout(() => {
      if (mounted)
        setMessage(messageInitialState)
    }, 3000);
    return () => {
      mounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showup])

  //Variable que contiene los diferentes tipos de filtros
  const filterItems = tempCategories.map(ele => 
    <GroupFiltro val={categories[ele.nombre]} getValue={getValue} key={ele.nombre} {...ele} />
  )

  //Variable que contiene al mensaje condicional
  const mssg = showup ? <Message texto={mensaje} tipo={err} /> : null

  return (
    <form className={styles.formFilters} onSubmit={handleSubmit}>
      {mssg}
      {filterItems}

      <button className={styles.btn} type='submit'>Filtrar</button>

      <span onClick={clearFilters} className={styles.btn}>
        Eliminar Filtros
      </span>

    </form>
  )
}

export default Filtros
