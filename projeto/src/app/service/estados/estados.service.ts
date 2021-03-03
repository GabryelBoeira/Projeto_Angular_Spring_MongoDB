import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from 'src/app/model/Estado';

@Injectable({
  providedIn: 'root',
})
export class EstadosService {
  private url: string =
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  constructor(private http: HttpClient) {}

  getEstados(): Observable<Array<Estado>> {
    return this.http.get<Array<Estado>>(this.url);
  }
}
