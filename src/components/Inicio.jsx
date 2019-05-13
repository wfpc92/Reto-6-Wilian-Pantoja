import React, { Component } from 'react'
import {Card} from "semantic-ui-react"
import Institucion from './Institucion';

export default class Inicio extends Component {
  render() {
    return (
      <div>
        <h1>Estamos en inicio</h1>
        <Card.Group>
          {
            this.props.instituciones.map((i, index) =>{
              return <Institucion institucion={i} key={index}></Institucion>
            })
          }
        </Card.Group>
      </div>
    )
  }
}
