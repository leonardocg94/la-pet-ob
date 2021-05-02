import React from 'react'
import styles from './sectionTitle.module.scss'

//Componente que despliega el titulo de una seccion
const SectionTitle = ({title}) => {
  
  return (
    <div className={styles.sectionTitle}>
      <h2 className={styles.title}>
        {title}
      </h2>
    </div>
  )
}


export default SectionTitle
