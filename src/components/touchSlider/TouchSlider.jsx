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

  const tempCatalog = [
    {
      id: '1',
      nombre: 'Menta-lacia-larga',
      precio: '600',
      tipo: 'pelucas'
    },
    {
      id: '2',
      nombre: 'Castaño-lacio-bob',
      precio: '550',
      tipo: 'pelucas'
    },
    {
      id: '3',
      nombre: 'Rojo-ruby-bob',
      precio: '600',
      tipo: 'pelucas'
    },
    {
      id: '4',
      nombre: 'Dark-chocolate-chino-largo',
      precio: '700',
      tipo: 'pelucas'
    },
    {
      id: '5',
      nombre: 'Rubio-lacio-bob',
      precio: '550',
      tipo: 'pelucas'
    },
    {
      id: '6',
      nombre: 'Gris-plata-larga-lacia',
      precio: '700',
      tipo: 'pelucas'
    },
    {
      id: '7',
      nombre: 'Gris-morada-larga',
      precio: '750',
      tipo: 'pelucas'
    },
    {
      id: '8',
      nombre: 'Golden-pink-corta',
      precio: '550',
      tipo: 'pelucas'
    }
  ]

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