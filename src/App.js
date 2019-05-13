import React from 'react';
import { Container, Header} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

import Router from './components/Router'
import instituciones from './datos/datos.json'
import Usuarios from './components/Usuarios'
import './App.css';

function App() {
  const repo = new Usuarios([]);   
  return (
    <Container>
      <Header>Crud de usuarios</Header>
      <Router instituciones={instituciones} repo={repo}></Router>
    </Container>
  );
}

export default App;
