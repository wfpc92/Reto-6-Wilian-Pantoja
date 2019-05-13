import React, { Component } from 'react'
import { Table, Button, Container } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';

export default class CrudRemove extends Component {

  constructor(props) {
    super(props)
    this.eliminar = this.eliminar.bind(this);
    const usuario = this.props.repo.usuarios[this.props.id];
    this.state = {
      nombre: usuario.nombre,
      telefono: usuario.telefono,
      email: usuario.email,
      tipo: usuario.tipo,
      eliminar: false
    }
  }

  eliminar() {
    this.setState({
      eliminar: true
    })
    this.props.repo.eliminarUsuario(this.props.id);
  }

  render() {
    if (this.state.eliminar === true) {
      return <Redirect to="/crud"></Redirect>
    }
    return (
      <Container>
        <Button basic color='red' onClick={this.eliminar}>Eliminar</Button>
        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={2}>Nombre</Table.Cell>
              <Table.Cell>{this.state.nombre}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Teléfono</Table.Cell>
              <Table.Cell>{this.state.telefono}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Email</Table.Cell>
              <Table.Cell>{this.state.email}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Tipo</Table.Cell>
              <Table.Cell>{this.state.tipo}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
      
    )
  }
}
