import { Regiao } from './Regiao';

export class Estado {
  id?: number;
  nome?: string;
  sigla?: string;
  regiao?: Regiao;

  constructor(attribute: Estado) {
    this.id = attribute.id;
    this.nome = attribute.nome;
    this.sigla = attribute.sigla;
    this.regiao = attribute.regiao;
  }
}
