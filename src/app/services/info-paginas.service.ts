import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../Interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginasService {

  info: InfoPagina = {};

  constructor(private http: HttpClient) {
    this.http.get('assets/Data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      this.info = resp;
    });
  }
}
