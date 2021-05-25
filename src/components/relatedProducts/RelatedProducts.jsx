import React, { useState, useEffect } from 'react'
import styles from './relatedProducts.module.scss'
import SectionTitle from '../sectionTitle/SectionTitle'
import Producto from '../producto/Producto'
import LoadComp from '../loadComp/LoadComp'
import Spinner from '../spinner/Spinner'

//Componente que contiene los productos relacionados a un producto seleccionado
const RelatedProducts = () => {

  //Estado de carga del componente
  const [loading, setloading] = useState(true)
  const [relatedItems, setrelatedItems] = useState([])

  useEffect(() => {
    const fetchRelatedItems = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_BK_HOST+'/producto/random?limit=4')
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
