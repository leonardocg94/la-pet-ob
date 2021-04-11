import React, { useState } from 'react'
import styles from './catalogo.module.scss'
import SectionTitle2 from '../../sectionTitle2/SectionTitle2'
import ContenedorProductos from './contenedorProductos/ContenedorProductos'

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
        <div className={showFiltros ? [filtros,show].join(' '):[filtros].join(' ')}>FILTROS
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos fugit corporis quasi, ipsa eveniet ea itaque, explicabo officiis, id cupiditate quis ad quo in? Similique adipisci dolorem reprehenderit iste alias harum maxime autem, debitis odit tempora dolorum? Repudiandae, quis accusamus aut rerum laudantium, harum amet ipsum officia vero est cupiditate dolorem architecto facilis pariatur deleniti sit voluptatum excepturi voluptatem tenetur, accusantium inventore nam laborum. Nostrum dolor minima in sit veniam nobis officia itaque quasi consequuntur rerum repellat nesciunt cupiditate, ipsum neque quo accusamus fugit vitae aperiam quam. Esse corporis distinctio, pariatur, doloribus voluptate fuga perferendis expedita quod hic rerum cum ducimus dignissimos enim alias sed qui, iusto accusantium quisquam in et error? Reprehenderit alias laudantium est laboriosam nulla nam molestias hic eum veniam aliquam quidem sapiente rem iste beatae vitae iure expedita, unde tempora sed maxime. Perspiciatis facilis beatae recusandae officiis, amet ipsa laborum ex! Placeat alias consequatur, cumque, atque sequi quaerat omnis quod aliquid suscipit iste incidunt consequuntur libero. Pariatur ducimus non facere magni veniam qui atque maxime tenetur in eius incidunt rem nemo, architecto sequi doloremque quam cumque fugiat, harum nisi. Dicta dolores mollitia nesciunt saepe nam obcaecati soluta magni magnam cupiditate sed, suscipit architecto distinctio dolore! Recusandae possimus dolorem odit inventore fuga voluptatibus, reiciendis, minus laborum laboriosam ullam veritatis non unde? Magnam maxime animi minus quia vero odit, magni repudiandae. Maiores possimus eum, dicta quas provident hic? Ipsam reprehenderit architecto a laborum veniam perspiciatis facilis quod aperiam, doloribus in? Magni eos voluptas assumenda ex deserunt! Quo expedita temporibus blanditiis laborum incidunt repudiandae. Ipsum pariatur quae libero molestias, soluta provident. Temporibus culpa ex cupiditate quam expedita consequatur dolorum beatae nesciunt? Hic non architecto labore nostrum amet esse ipsum placeat? Aperiam porro nobis nesciunt, ullam culpa labore, laborum numquam minus nulla consectetur mollitia voluptas excepturi temporibus pariatur dolorum commodi dignissimos deleniti praesentium, asperiores ipsum eveniet inventore? Quaerat ipsa facere maxime doloremque recusandae deserunt blanditiis eligendi, at voluptas atque deleniti magnam repudiandae dicta non, et aperiam laboriosam sequi architecto quia vero nisi nihil, aspernatur ipsum est. Accusamus voluptas facilis facere velit iure! Asperiores repellendus excepturi laboriosam mollitia quod tenetur, qui eum incidunt necessitatibus dolor consequatur quidem nemo iure labore optio error, adipisci pariatur veritatis minima totam libero consequuntur quisquam dolores dicta? Explicabo culpa placeat error iure quisquam, et totam corrupti molestiae obcaecati amet sapiente recusandae voluptates tempore inventore nemo exercitationem ipsa assumenda aut eius modi! Suscipit, quasi dolor repellat, eveniet nemo veritatis libero deserunt beatae dignissimos doloribus voluptate, inventore consectetur est similique. Harum, molestias doloribus. Odit ea quae tempora autem facilis inventore temporibus unde dignissimos aut. Possimus ducimus libero quasi molestiae nisi modi excepturi expedita nulla soluta eos voluptatum, temporibus alias animi? Fugiat, magnam suscipit. Culpa fugit dicta quod sed adipisci minima esse odio. Officiis cum ex saepe expedita quos consequatur ratione soluta provident, sapiente, incidunt deserunt asperiores voluptatem eius nostrum beatae enim eum ad tempora iure corporis. Quod autem ad officia facilis explicabo veritatis suscipit, magni labore earum accusamus! Ea assumenda at quod, cupiditate dolores ratione consequuntur accusamus?</p>
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
