import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  public usuario: Usuario;
  public usuarioList: Array<Usuario>;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuario = this.usuarioService.getUsuario();
    this.usuarioList = this.usuarioService.getUsuarioList();
  }
}
