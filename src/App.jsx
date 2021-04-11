import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Inicio from './components/pages/inicio/Inicio'
import Catalogo from './components/pages/catalogo/Catalogo'

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact path='/'><Inicio/></Route>
        <Route path='/catalogo'><Catalogo/></Route> 
      </Layout>
    </Router>

  );
}

export default App;
