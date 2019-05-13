import React, { Component } from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react'

import Inicio from './Inicio'
import NoRoute from './NoRoute'
import SingleInstitucion from './SingleInstitucion'
import Crud from './Crud'
import CrudCreate from './CrudCreate'
import CrudRemove from './CrudRemove'

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/crud">
          <Button>Usuarios</Button>
        </Link>
        <Switch>
          <Route path="/inicio" component={Inicio}></Route>
          <Route path="/otraruta" component={Inicio}></Route>
          <Route path="/pruebas" render={() => {
            return <Inicio instituciones={this.props.instituciones}></Inicio>
          }}></Route>
          <Route path="/institucion/:id" render={(props)=>{
            const {match} = props;
            const id = match.params.id;
            console.log(id)
            return <SingleInstitucion institucion={this.props.instituciones.data[id]}></SingleInstitucion>
          }}></Route>
          <Route path="/crud" render={()=>{
            return <Crud repo={this.props.repo}></Crud>
          }}></Route>
          <Route exact path="/crud-create" render={()=>{
            return <CrudCreate repo={this.props.repo}></CrudCreate>
          }}></Route>
          <Route path="/crud-editar/:id" render={(props)=>{
            console.log(props);
            return <CrudCreate create={false} repo={this.props.repo} id={props.match.params.id}></CrudCreate>
          }}></Route>
          <Route path="/crud-remove/:id" render={(props)=>{
            return <CrudRemove repo={this.props.repo} id={props.match.params.id}></CrudRemove>
          }}></Route>
          <Route path="" component={NoRoute}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
