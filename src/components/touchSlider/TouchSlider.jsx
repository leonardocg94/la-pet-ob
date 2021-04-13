import React from 'react'
// Import Swiper React components
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Producto from '../producto/Producto'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import './swiper.scss'

SwiperCore.use([Pagination])

const TouchSlider = ({ tempCatalog, breakPoints, slides }) => {



  return (
    <Swiper
      spaceBetween={35}
      slidesPerView={slides}
      pagination
      onSlideChange={() => { }}
      onSwiper={(swiper) => { }}
      breakpoints={breakPoints}
    >
      {tempCatalog.map(peluca => (
        <SwiperSlide key={peluca.id}>
          <Producto
            tipo={peluca.tipo}
            nombre={peluca.nombre}
            id={peluca.id}
            precio={peluca.precio}
          />
        </SwiperSlide>
      ))}

    </Swiper>
  )
}

export default TouchSlider