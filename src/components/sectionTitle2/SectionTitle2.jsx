import React from 'react'
import styles from './sectionTitle2.module.scss'

//Componente que despliega el titulo de una seccion
const SectionTitle2 = ({titulo}) => {

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.title}>{titulo}</h2>
    </div>
  )
}

export default SectionTitle2
