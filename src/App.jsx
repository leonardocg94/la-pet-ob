import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Inicio from './components/pages/inicio/Inicio'
import Catalogo from './components/pages/catalogo/Catalogo'
import Detalles from './components/pages/detalles/Detalles'
import StateProductos from './context/productos/StateProductos'
import ScrollTotop from './components/scrollTotop/ScrollTotop'
import StateCarrito from './context/carrito/StateCarrito'
import Carrito from './components/pages/carrito/Carrito'

const App = () => {

  return (
    <StateProductos>
      <StateCarrito>
        <Router>
          <ScrollTotop />
          <Layout>
            <Route exact path='/'><Inicio /></Route>
            <Route exact path='/catalogo'><Catalogo /></Route>
            <Route exact path='/carrito'><Carrito/></Route>
            <Route exact path='/pelucas/:id'><Detalles /></Route>
          </Layout>
        </Router>
      </StateCarrito>
    </StateProductos>
  );
}

export default App;
