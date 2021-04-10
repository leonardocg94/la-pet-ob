import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Producto from '../producto/Producto'

// Import Swiper styles
import 'swiper/swiper.scss'
import './swiper.scss'

const TouchSlider = () => {
  return (
    <Swiper
      spaceBetween={35}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        1501: {
          slidesPerView: 4
        },
        1101: {
          slidesPerView: 3
        },
        501: {
          slidesPerView: 2
        }
      }}
    >
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='peluca' precio='999' />
      </SwiperSlide>
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='peluca' precio='999' />
      </SwiperSlide>
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='peluca' precio='999' />
      </SwiperSlide>
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='peluca' precio='999' />
      </SwiperSlide>
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='peluca' precio='999' />
      </SwiperSlide>
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='peluca' precio='999' />
      </SwiperSlide>
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='peluca' precio='999' />
      </SwiperSlide>
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='peluca' precio='999' />
      </SwiperSlide>

    </Swiper>
  )
}

export default TouchSlider