import React from 'react'
import styles from './sectionTitle.module.scss'

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
