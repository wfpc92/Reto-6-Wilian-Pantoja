import React, {useState} from 'react'

export default class Usuarios{

  usuarios;
  setUSuarios;
  constructor(data) {
    const [u, setU] = useState(data || []);
    this.usuarios = u;
    this.setUsuarios = setU;
  }
  
  crearUsuario(usuario) {
    this.setUsuarios([...this.usuarios, usuario]);
  }

  editarUsuario(usuario,  id){
    let usuarios = this.usuarios;
    usuarios[id] = usuario;
    this.setUsuarios(usuarios);
  }

  eliminarUsuario(id){
    let usuarios = this.usuarios;
    usuarios.splice(id, 1);
    this.setUsuarios(usuarios);
  } 
}