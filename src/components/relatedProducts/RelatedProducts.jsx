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
  const { productos } = pContext

  //Estado de carga del componente
  const [loading, setloading] = useState(true)
  const [relatedItems, setrelatedItems] = useState([])

  //Uso del objeto de ubicacion
  const location = useLocation()

  //Uso de use memo para que los productos relacionados no se cambien a menos que cambiemos de ruta
  // const relatedItems = useMemo(
  //   () => loadItems(),
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [location.pathname, loading]
  // )

  useEffect(() => {
    const fetchRelatedItems = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/producto/random?limit=4')
        const data = await response.json()
        setrelatedItems(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchRelatedItems()
    setloading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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
