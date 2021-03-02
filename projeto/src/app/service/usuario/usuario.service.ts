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
}
