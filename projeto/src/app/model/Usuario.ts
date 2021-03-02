import { ParseOptions } from 'querystring';

export class Usuario {
  nome: string;
  email: string;

  constructor(attribute: Usuario) {
    this.nome = attribute.nome;
    this.email = attribute.email;
  }
}
