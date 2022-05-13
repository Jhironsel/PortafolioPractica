import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from "../Interfaces/InfoPagina";

@Injectable({
  providedIn: 'root'
})

export class InfoPaginasService {

  info: InfoPagina = {};
  equipo: any[] = [];
  cargado = false;
  cargadoEquipo=false;

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/Data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      this.info = resp;
      this.cargado = true;
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html5-35838-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp: any) => {
      this.equipo = resp;
      this.cargadoEquipo=true;
    });
  }
}
