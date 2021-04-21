import React from 'react'
import styles from './notFound.module.scss'

const NotFound = ({texto}) => {
  return (
    <section className={styles.notFounded}>
      <h2 className={styles.notMessage}>{texto}</h2>
    </section>
  )
}

export default NotFound
