export class Regiao {
  id?: number;
  nome?: string;
  sigla?: string;

  constructor(attribute: Regiao) {
    this.id = attribute.id;
    this.nome = attribute.nome;
    this.sigla = attribute.sigla;
  }
}
