import { Injectable } from '@angular/core';
import { Usuario } from '../../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}

  public getUsuario(): Usuario {
    return new Usuario({ nome: 'Jose', email: 'jose@gmail.com' });
  }

  public getUsuarioList(): Array<Usuario> {
    return [
      {
        nome: 'Maria',
        email: 'Maria@gmail.com',
      },
      {
        nome: 'Mario',
        email: 'Mario@gmail.com',
      },
      {
        nome: 'Marcia',
        email: 'Marcia@gmail.com',
      },
      {
        nome: 'Marcos',
        email: 'Marcos@gmail.com',
      },
    ];
  }
}
