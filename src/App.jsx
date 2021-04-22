import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Inicio from './components/pages/inicio/Inicio'
import Catalogo from './components/pages/catalogo/Catalogo'
import Detalles from './components/pages/detalles/Detalles'
import StateUsuario from './context/usuario/StateUsuario'
import StateProductos from './context/productos/StateProductos'
import StateCarrito from './context/carrito/StateCarrito'
import ScrollTotop from './components/scrollTotop/ScrollTotop'
import Carrito from './components/pages/carrito/Carrito'
import Registro from './components/pages/registro/Registro'
import NotFound from './components/notFound/NotFound'


const App = () => {

  return (
    <StateUsuario>
      <StateProductos>
        <StateCarrito>
          <Router>
            <ScrollTotop />
            <Layout>
              <Switch>
                <Route exact path='/'><Inicio /></Route>
                <Route exact path='/catalogo'><Catalogo /></Route>
                <Route exact path='/carrito'><Carrito /></Route>
                <Route exact path='/pelucas/:id'><Detalles /></Route>
                <Route exact path='/registro'><Registro /></Route>
                <Route exact path='/*'>
                  <NotFound texto='Pagina no encontrada' />
                </Route>
              </Switch>
            </Layout>
          </Router>
        </StateCarrito>
      </StateProductos>
    </StateUsuario>
  );
}

export default App;
