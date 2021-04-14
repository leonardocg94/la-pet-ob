import React from 'react'
// Import Swiper React components
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

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
      {tempCatalog.map(ele => (
        <SwiperSlide key={ele.id}>
          {ele.item}
        </SwiperSlide>
      ))}

    </Swiper>
  )
}

export default TouchSlider