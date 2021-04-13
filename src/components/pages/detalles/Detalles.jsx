import React from 'react'
import styles from './detalles.module.scss'
// import TouchSlider from '../../touchSlider/TouchSlider'
import Info from './info/Info'


const Detalles = () => {

  const { detalles, content, images, info } = styles 

  return (
    <section className={detalles}>
      <div className={content}>
        <div className={images}>
        </div>
        <div className={info}>
          <Info />
        </div>
      </div>
    </section>
  )
}

export default Detalles
