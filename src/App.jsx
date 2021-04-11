import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Inicio from './components/pages/inicio/Inicio'

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact path='/'><Inicio/></Route>
        <Route path='/catalogo'>Somos el catalogo paps</Route> 
      </Layout>
    </Router>

  );
}

export default App;
