import React from 'react'
//Componentes necesarios para usar swiper
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

//Estilos necesarios para usar swiper
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import './swiper.scss'

//Uso del modulo pagination de swiper
SwiperCore.use([Pagination])

//Componente que despliega un slider, recibe el catalogo de items, los breakpoints para el modo responsivo y la cantidad de items por pantalla
const TouchSlider = ({ tempCatalog, breakPoints, slides }) => {
  //Variable que contiene los items a mostrar
  const swItems = tempCatalog.map(ele => (
    <SwiperSlide key={ele.id}>
      {ele.item}
    </SwiperSlide>
  ))

  return (
    <Swiper
      spaceBetween={35}
      slidesPerView={slides}
      pagination
      onSlideChange={() => {}}
      onSwiper={(swiper) => {}}
      breakpoints={breakPoints}
    >
      {swItems}
    </Swiper>
  )
}

export default TouchSlider