import React, { useState } from 'react'
import styles from './catalogo.module.scss'
import SectionTitle2 from '../../sectionTitle2/SectionTitle2'
import ContenedorProductos from './contenedorProductos/ContenedorProductos'
import Filtros from './filtros/Filtros'

const Catalogo = () => {

  const { catalogo, filtros, positioning, productos,
    btnFiltros, show, pantalla, grow } = styles

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
    },
    {
      id: '9',
      nombre: 'Corta-rojo-cereza',
      precio: '550',
      tipo: 'pelucas'
    },
    {
      id: '10',
      nombre: 'Rosa-chicle-corta',
      precio: '550',
      tipo: 'pelucas'
    },
    {
      id: '11',
      nombre: 'Rosa-coral-larga-lacia',
      precio: '600',
      tipo: 'pelucas'
    },
    {
      id: '12',
      nombre: 'Vino-magenta-larga-lacia',
      precio: '600',
      tipo: 'pelucas'
    },
    {
      id: '13',
      nombre: 'Azul-bondi-corta',
      precio: '550',
      tipo: 'pelucas'
    },
    {
      id: '14',
      nombre: 'Castaño-nogal',
      precio: '600',
      tipo: 'pelucas'
    },
    {
      id: '15',
      nombre: 'Negro-terciopelo-largo-lacio',
      precio: '600',
      tipo: 'pelucas'
    },
    {
      id: '16',
      nombre: 'Rubio-dorado',
      precio: '550',
      tipo: 'pelucas'
    },
    {
      id: '17',
      nombre: 'Rubio-paja-larga-ondulada',
      precio: '650',
      tipo: 'pelucas'
    },
    {
      id: '18',
      nombre: 'Rojo-granate-de-bohemia',
      precio: '650',
      tipo: 'pelucas'
    },
    {
      id: '19',
      nombre: 'Miel-ondulada-larga',
      precio: '650',
      tipo: 'pelucas'
    },
    {
      id: '20',
      nombre: 'Negro-bob',
      precio: '550',
      tipo: 'pelucas'
    },
    {
      id: '21',
      nombre: 'Vino-magenta-californiano',
      precio: '650',
      tipo: 'pelucas'
    },
    {
      id: '22',
      nombre: 'Turquesa',
      precio: '600',
      tipo: 'pelucas'
    },
    {
      id: '23',
      nombre: 'Rosa-flamingo-ondulada-corta',
      precio: '550',
      tipo: 'pelucas'
    },
    {
      id: '24',
      nombre: 'White-silver',
      precio: '600',
      tipo: 'pelucas'
    },
    {
      id: '25',
      nombre: 'Verde-esmeralda',
      precio: '550',
      tipo: 'pelucas'
    },
    {
      id: '26',
      nombre: 'Azul-media-noche',
      precio: '550',
      tipo: 'pelucas'
    },
    {
      id: '27',
      nombre: 'Rubio-dorado-californiano',
      precio: '600',
      tipo: 'pelucas'
    },
    {
      id: '28',
      nombre: 'Gris-plata-californiano',
      precio: '600',
      tipo: 'pelucas'
    },
    {
      id: '29',
      nombre: 'Snow-queen',
      precio: '700',
      tipo: 'pelucas'
    },
    {
      id: '30',
      nombre: 'Castaño-caramelo-bob',
      precio: '550',
      tipo: 'pelucas'
    }
  ]

  const [showFiltros, setShowiltros] = useState(false)

  const filtrosHandler = () => {
    const auxShow = !showFiltros
    setShowiltros(auxShow)
  }

  return (
    <section className={catalogo}>
      <SectionTitle2 titulo='Catalogo' />
      <div className={positioning}>
        <div className={showFiltros ? [filtros,show].join(' '):[filtros].join(' ')}>
          <Filtros/>
        </div>
        <div className={productos}>
          <ContenedorProductos productos={tempCatalog} />
        </div>
        <button onClick={filtrosHandler} className={btnFiltros}>F</button>
        <div className={showFiltros ? [pantalla,grow].join(' '):[pantalla].join(' ')}></div>
      </div>
    </section>
  )
}

export default Catalogo
