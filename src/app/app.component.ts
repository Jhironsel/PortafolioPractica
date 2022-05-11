import { InfoPaginasService } from './services/info-paginas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _infoPagina: InfoPaginasService){

  }
}
