import React, { useContext, useMemo, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './relatedProducts.module.scss'
import contextProductos from '../../context/productos/contextProductos'
import SectionTitle from '../sectionTitle/SectionTitle'
import Producto from '../producto/Producto'
import LoadComp from '../loadComp/LoadComp'
import Spinner from '../spinner/Spinner'

//Componente que contiene los productos relacionados a un producto seleccionado
const RelatedProducts = () => {
  //Uso del contexto de los productos
  const pContext = useContext(contextProductos)
  const { productos, noAllItems } = pContext

  //Estado de carga del componente
  const [loading, setLoading] = useState(true)



  //Uso del objeto de ubicacion
  const location = useLocation()

  //Funcion que genera un numero aleatorio dentro del rango de indice de los productos
  const getRandomNumber = (max, min) => {
    const randomNumber = Math.ceil(Math.random() * (max - min) + min)
    return randomNumber
  }

  //Funcion que carga los items generados aleatoriamente
  const loadItems = () => {
    const relatedItems = []
    for (let i = 0; i < 4; i++)
      relatedItems.push(productos[
        getRandomNumber(productos.length - 1, 0)
      ])
    return relatedItems
  }

  //Uso de use memo para que los productos relacionados no se cambien a menos que cambiemos de ruta
  const relatedItems = useMemo(
    () => loadItems(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname, loading]
  )

  //recarga el componente cuando los productos cambian y solo carga si los productos estan completos
  useEffect(() => {
    setLoading(true)
    if (productos.length === noAllItems) {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productos])

  //Variable del contenido condicional del componente 
  let content
  if (!loading) {
    //Variable que contiene los productos relacionados
    const relItems = relatedItems.map((ele, i) => (
      <div key={i} className={styles.productContainer}>
        <Producto {...ele} />
      </div>
    ))
    content = (
      <>
        <SectionTitle title='Productos que quiza te interesen' />

        <div className={styles.relatedProducts}>
          {relItems}
        </div>
      </>
    )
  } else {
    content = (
      <LoadComp>
        <Spinner />
      </LoadComp>
    )
  }

  return (
    <>
      {content}
    </>
  )
}

export default RelatedProducts
