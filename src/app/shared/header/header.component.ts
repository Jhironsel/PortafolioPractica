import { InfoPaginasService } from './../../services/info-paginas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _servicio: InfoPaginasService, private router: Router) { }

  ngOnInit(): void {
  }

  public buscarProducto(txtBuscar: string){

    if(txtBuscar.length < 1){
      return;
    }

    this.router.navigate(['/search', txtBuscar]);
  }

}
