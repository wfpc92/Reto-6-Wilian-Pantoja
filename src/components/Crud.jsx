import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button, Icon, Table } from 'semantic-ui-react';

export default class Crud extends Component {
  render() {
    console.log(this.props)
    return (
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Teléfono</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Tipo</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            this.props.repo.usuarios.map((usuario, index) => 
              <Table.Row key={index}>
                <Table.Cell collapsing>
                  <Link to={`/crud-editar/${index}`}>
                    <Button basic>Editar</Button>
                  </Link>
                  <Link to={`/crud-remove/${index}`}>
                    <Button basic color='red'>Eliminar</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>{usuario.nombre}</Table.Cell>
                <Table.Cell>{usuario.telefono}</Table.Cell>
                <Table.Cell>{usuario.email}</Table.Cell>
                <Table.Cell>{usuario.tipo}</Table.Cell>
              </Table.Row>)
          }
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='4'>
              <Link to="/crud-create">
                <Button floated='right' icon labelPosition='left'  size='small'>
                  <Icon name='user' /> Crear usuario
                </Button>
              </Link>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}
