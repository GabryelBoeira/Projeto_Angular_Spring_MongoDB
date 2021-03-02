import { ParseOptions } from 'querystring';
import { UsuarioCadastroComponent } from '../usuario/cadastro/usuario-cadastro.component';

export class Usuario {
  nome?: string;
  email?: string;

  constructor(attribute: Usuario) {
    this.nome = attribute.nome;
    this.email = attribute.email;
  }
}
