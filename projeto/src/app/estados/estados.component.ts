import { Component, OnInit } from '@angular/core';
import { Estado } from '../model/Estado';
import { EstadosService } from '../service/estados/estados.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css'],
})
export class EstadosComponent implements OnInit {
  public estados: Array<Estado>;

  constructor(private estadosService: EstadosService) {}

  ngOnInit(): void {
    this.estadosService.getEstados().subscribe((response) => {
      this.estados = response;
    });
  }
}
