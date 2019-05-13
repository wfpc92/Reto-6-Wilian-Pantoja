import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';

export default class CrudCreate extends Component {
  
  constructor(props) {
    super(props);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeTelefono = this.onChangeTelefono.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTipo = this.onChangeTipo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    if (this.props.create === false) {
      const usuario = this.props.repo.usuarios[this.props.id];
      this.state = {
        nombre: usuario.nombre,
        telefono: usuario.telefono,
        email: usuario.email,
        tipo: usuario.tipo
      }
    } else {
      this.state = {
        nombre: '',
        telefono: '',
        email:'',
        tipo: 'empleado'
      }
    }
    console.log("es crear?", this.props.create, this.state);
  }

  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }

  onChangeTelefono(e) {
    this.setState({
      telefono: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeTipo(e) {
    this.setState({
      tipo: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const usuario = {
      nombre: this.state.nombre,
      telefono: this.state.telefono,
      email: this.state.email,
      tipo: this.state.tipo
    };
     
    if (this.props.create === false) {
      this.props.repo.editarUsuario(usuario, this.props.id);
    } else {
      this.props.repo.crearUsuario(usuario);
    }

    
    this.setState({
      finalizar: true
    })
    console.log(this.props)
  }

  render() {
    if (this.state.finalizar === true) {
      return <Redirect to='/crud' />
    }

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Nombres</label>
          <input placeholder='Nombres' value={this.state.nombre} onChange={this.onChangeNombre}/>
        </Form.Field>
        <Form.Field>
          <label>Telefono</label>
          <input type="number" placeholder='Teléfono' value={this.state.telefono} onChange={this.onChangeTelefono}/>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input type="email" placeholder='Email' value={this.state.email} onChange={this.onChangeEmail}/>
        </Form.Field>
        <Form.Field label='Tipo' control='select' value={this.state.tipo} onChange={this.onChangeTipo}>
          <option value='empleado' defaultValue>Empleado</option>
          <option value='rrhh'>Recursos Humanos</option>
        </Form.Field>
        <Button type='submit'>{ this.props.create === false ? 'Editar' : 'Guardar' }</Button>
      </Form>
    )
  }
}
