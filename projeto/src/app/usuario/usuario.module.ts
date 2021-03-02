import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsuarioComponent, UsuarioCadastroComponent],
  imports: [FormsModule, CommonModule, UsuarioRoutingModule],
})
export class UsuarioModule {}
