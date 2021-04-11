import React from 'react'
import styles from './sectionTitle2.module.scss'

const SectionTitle2 = ({titulo}) => {

  const {sectionContainer, title} = styles

  return (
    <div className={sectionContainer}>
      <h2 className={title}>{titulo}</h2>
    </div>
  )
}

export default SectionTitle2
