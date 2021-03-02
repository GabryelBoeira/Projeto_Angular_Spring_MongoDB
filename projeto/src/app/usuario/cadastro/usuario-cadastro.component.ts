import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['../usuario.component.css'],
})
export class UsuarioCadastroComponent implements OnInit {
  public usuario: Usuario = new Usuario({});

  constructor() {}

  ngOnInit(): void {}

  public salvar(): void {
    alert('Salvo com sucesso');
  }
}
