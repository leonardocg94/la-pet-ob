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

const TouchSlider = () => {
  return (
    <Swiper
      spaceBetween={35}
      slidesPerView={1}
      pagination
      onSlideChange={() => { }}
      onSwiper={(swiper) => { }}
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
        <Producto tipo='pelucas' nombre='Menta-lacia-larga' id='1' precio='999' />
      </SwiperSlide>
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='Castaño-lacio-bob' id='2' precio='999' />
      </SwiperSlide>
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='Rojo-ruby-bob' id='3' precio='999' />
      </SwiperSlide>
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='Dark-chocolate-chino-largo' id='4' precio='999' />
      </SwiperSlide>
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='Rubio-lacio-bob' id='5' precio='999' />
      </SwiperSlide>
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='Gris-plata-larga-lacia' id='6' precio='999' />
      </SwiperSlide>
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='Gris-morada-larga' id='7' precio='999' />
      </SwiperSlide>
      <SwiperSlide>
        <Producto tipo='pelucas' nombre='Golden-pink-corta' id='8' precio='999' />
      </SwiperSlide>

    </Swiper>
  )
}

export default TouchSlider