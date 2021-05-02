import React, { useReducer } from 'react'
import contextProductos from './contextProductos'
import reducerProductos from './reducerProductos'
import { dbproductos } from '../../data/data'
import {
  SELECCIONAR_PRODUCTO,
  BUSCAR_PRODUCTOS,
  REINICIAR_PRODUCTOS
} from '../../types/productsTypes'

//Estado global de los productos
const StateProductos = ({ children }) => {
  //Estado inicial de los productos
  const initialState = {
    productos: dbproductos,
    filteredProducts: [
      {
        id: '1',
        nombre: 'Menta-lacia-larga',
        precio: 600,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca lacia color menta degradada ombre directo de fabrica, broches ajustables delanteros, red de encaje.',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 65,
          color: 'verde',
          peinado: 'lacio'
        }
      },
      {
        id: '2',
        nombre: 'Castaño-lacio-bob',
        precio: 550,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca corte bob castaño directo de fabrica, red de encaje, broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de raiz',
          tamano: 35,
          color: 'negro',
          peinado: 'lacio'
        }
      },
      {
        id: '3',
        nombre: 'Rojo-ruby-bob',
        precio: 600,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca corte bob rojo-ruby ombre directo de fabrica, red de encaje, broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de raíz',
          tamano: 35,
          color: 'rojo',
          peinado: 'lacio'
        }
      },
      {
        id: '4',
        nombre: 'Dark-chocolate-chino-largo',
        precio: 700,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca larga dark-chocolate ondulada directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra de Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 80,
          color: 'negro',
          peinado: 'ondulado'
        }
      },
      {
        id: '5',
        nombre: 'Rubio-lacio-bob',
        precio: 550,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca rubia clara corte Midi lacia ombre directo de fabrica, Red de encaje, Broches delanteros ajustables',
          material: 'Fibra Kanecalon',
          tipo: 'Simulación de Raíz',
          tamano: 35,
          color: 'rubio',
          peinado: 'lacio'
        }
      },
      {
        id: '6',
        nombre: 'Gris-plata-larga-lacia',
        precio: 700,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca lacia color gris plateada degradada ombre directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 65,
          color: 'gris',
          peinado: 'lacio'
        }
      },
      {
        id: '7',
        nombre: 'Gris-morada-larga',
        precio: 750,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca de ondas color plata lila degradada californiano ombre directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 85,
          color: 'morado, gris',
          peinado: 'ondulado'
        }
      },
      {
        id: '8',
        nombre: 'Golden-pink-corta',
        precio: 550,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca corta ondulada Golden Pink directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 35,
          color: 'rosa',
          peinado: 'chino'
        }
      },
      {
        id: '9',
        nombre: 'Corta-rojo-cereza',
        precio: 550,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca corta ondulada rojo-creza directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 35,
          color: 'rojo',
          peinado: 'chino'
        }
      },
      {
        id: '10',
        nombre: 'Rosa-chicle-corta',
        precio: 550,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca corta ondulada Rosa Chicle directo de fabrica, Red de encaje, Broches ajustables delantero',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 35,
          color: 'rosa',
          peinado: 'chino'
        }
      },
      {
        id: '11',
        nombre: 'Rosa-coral-larga-lacia',
        precio: 600,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca lacia color Rosa Coral degradada ombre directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 65,
          color: 'rosa',
          peinado: 'lacio'
        }
      },
      {
        id: '12',
        nombre: 'Vino-magenta-larga-lacia',
        precio: 600,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca lacia color vino magenta degradada ombre directo de fabrica, Red de Encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 65,
          color: 'rojo',
          peinado: 'lacio'
        }
      },
      {
        id: '13',
        nombre: 'Azul-bondi-corta',
        precio: 550,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca corta ondulada azul bondi directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 35,
          color: 'azul',
          peinado: 'chino'
        }
      },
      {
        id: '14',
        nombre: 'Castaño-nogal',
        precio: 600,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca lacia color castaño claro dorado degradada ombre directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 65,
          color: 'castaño',
          peinado: 'lacio'
        }
      },
      {
        id: '15',
        nombre: 'Negro-terciopelo-largo-lacio',
        precio: 600,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca lacia color negro terciopelo directo de fabrica, Red de encaje, Broches delanteros ajustables',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 65,
          color: 'negro',
          peinado: 'lacio'
        }
      },
      {
        id: '16',
        nombre: 'Rubio-dorado',
        precio: 550,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca lacia color rubio dorado degradada ombre directo de fabrica, Red de encaje, Broches delanteros ajustables',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 65,
          color: 'rubio',
          peinado: 'lacio'
        }
      },
      {
        id: '17',
        nombre: 'Rubio-paja-larga-ondulada',
        precio: 650,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca larga rubio paja ondulada directo de fabrica, Red de encaje, Broches delanteros ajustables',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 80,
          color: 'rubio',
          peinado: 'ondulada'
        }
      },
      {
        id: '18',
        nombre: 'Rojo-granate-de-bohemia',
        precio: 650,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca larga roja granate ondulada directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 80,
          color: 'rojo',
          peinado: 'ondulado'
        }
      },
      {
        id: '19',
        nombre: 'Miel-ondulada-larga',
        precio: 650,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca larga Miel ondulada directo de fabrica, Red de encaje, Broches delanteros ajustables',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 80,
          color: 'castano',
          peinado: 'ondulado'
        }
      },
      {
        id: '20',
        nombre: 'Negro-bob',
        precio: 550,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca corte bob negro directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 35,
          color: 'negro',
          peinado: 'lacio'
        }
      },
      {
        id: '21',
        nombre: 'Vino-magenta-californiano',
        precio: 650,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca lacia color vino magenta degradada californiano directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 65,
          color: 'rojo',
          peinado: 'lacio'
        }
      },
      {
        id: '22',
        nombre: 'Turquesa',
        precio: 600,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca lacia color turquesa degradada ombre directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 65,
          color: 'azul',
          peinado: 'lacio'
        }
      },
      {
        id: '23',
        nombre: 'Rosa-flamingo-ondulada-corta',
        precio: 550,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca corta ondulada con fleco rosa flamingo directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 35,
          color: 'rosa',
          peinado: 'chino'
        }
      },
      {
        id: '24',
        nombre: 'White-silver',
        precio: 600,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca ondulada white silver degradada ombre directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 65,
          color: 'gris',
          peinado: 'ondulado'
        }
      },
      {
        id: '25',
        nombre: 'Verde-esmeralda',
        precio: 550,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca corte bob verde esmeralda directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 35,
          color: 'verde',
          peinado: 'lacio'
        }
      },
      {
        id: '26',
        nombre: 'Azul-media-noche',
        precio: 550,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca lacia color azul media noche degradada ombre directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 35,
          color: 'azul',
          peinado: 'lacio'
        }
      },
      {
        id: '27',
        nombre: 'Rubio-dorado-californiano',
        precio: 600,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca ondulada rubio dorado degradada californiano directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 65,
          color: 'rubio',
          peinado: 'ondulado'
        }
      },
      {
        id: '28',
        nombre: 'Gris-plata-californiano',
        precio: '600',
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca lacia color gris plata degradada californiano directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 65,
          color: 'gris',
          peinado: 'lacio'
        }
      },
      {
        id: '29',
        nombre: 'Snow-queen',
        precio: 700,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca con ondas color snow queen directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 85,
          color: 'gris',
          peinado: 'ondulado'
        }
      },
      {
        id: '30',
        nombre: 'Castaño-caramelo-bob',
        precio: 550,
        tipo: 'pelucas',
        caracteristicas: {
          descripcion: 'Peluca corte tipo bob color caramelo directo de fabrica, Red de encaje, Broches ajustables delanteros',
          material: 'Fibra Kanekalon',
          tipo: 'Simulación de Raíz',
          tamano: 35,
          color: 'castaño',
          peinado: 'lacio'
        }
      }
    ],
    search: null,
    selectedProduct: null
  }

  //Inicializacion del reducer para manejar el estado
  const [state, dispatch] = useReducer(reducerProductos, initialState)

  //Selecciona un producto y carga sus imagenes para mostrarlo en detalle
  const selectProduct = proid => {
    const product = (state.productos.filter(ele => ele.id === proid))[0]
    const imgs = []
    const imgSty = {
      height: '100%',
      verticalAlign: 'top',
      objectFit: 'cover',
      margin: '0 auto',
      display: 'block',
      borderRadius: '3px'
    }

    if (product) {
      const { id, nombre, tipo } = product
      for (let i = 1; i < 5; i++) {
        const img = <img
          src={require(`../../img/${tipo}/${id}_${nombre}/${i}.jpg`).default}
          alt={`Peluca ${nombre}`}
          style={imgSty}
        />
        imgs.push({
          id: i,
          item: img
        })
      }
    } else {
      dispatch({
        type: SELECCIONAR_PRODUCTO,
        payload: null
      })
      return
    }

    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: { product, imgs }
    })
  }

  //Filtra los productos por busqueda
  const filtProducts = str => {
    const aux = state.productos.filter(ele => (
      ele.caracteristicas.descripcion.toLowerCase().includes(str)
      || ele.nombre.toLowerCase().includes(str)
      || ele.caracteristicas.color.toLowerCase().includes(str)
      || ele.caracteristicas.tipo.toLowerCase().includes(str)
    ))
    
    dispatch({
      type: BUSCAR_PRODUCTOS,
      payload: [...aux]
    })
  }

  //reinicia los productos filtrados
  const resetProducts = () => {
    dispatch({
      type: REINICIAR_PRODUCTOS
    })
  }

  return (
    <contextProductos.Provider
      value={{
        productos: state.productos,
        search: state.search,
        filteredProducts: state.filteredProducts,
        selectedProduct: state.selectedProduct,
        selectProduct,
        filtProducts,
        resetProducts
      }}
    >
      {children}
    </contextProductos.Provider>
  )
}

export default StateProductos
