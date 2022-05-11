import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../Interfaces/productos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Productos[]=[];

  constructor(private http: HttpClient) {
    this.cargarProducto();
  }

  private cargarProducto(){
    this.http.get<Productos[]>('https://angular-html5-35838-default-rtdb.firebaseio.com/productos_idx.json')
             .subscribe((resp: Productos[])=> {
               this.productos = resp;
        console.log(resp);
        this.cargando = false;
      });
  }
}
