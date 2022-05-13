import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../Interfaces/productos.interfaces';
import { ProductosDescricion } from '../Interfaces/productosDescripcion.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Productos[]=[];
  productosFiltrados: Productos[]=[];

  constructor(private http: HttpClient) {
    this.cargarProducto();
  }

  private cargarProducto(){
    return new Promise<void>((resolve, rechaza) =>{
      this.http.get<Productos[]>('https://angular-html5-35838-default-rtdb.firebaseio.com/productos_idx.json')
             .subscribe((resp: Productos[])=> {
              this.productos = resp;
              this.cargando = false;
              resolve();
      });
    });

  }

  getProductos(id: string){
    return this.http.get<ProductosDescricion>(`https://angular-html5-35838-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string){

    if(this.productos.length === 0){
      //cargar los productos
      this.cargarProducto().then(() => {
        //Ejecutar despues que tengamos todos los productos.
        this.filtrarProductos(termino);
      });
    }else{
      //aplicar filtro
      this.filtrarProductos(termino);
    }

  }

  private filtrarProductos(termino: string){
    this.productosFiltrados = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(tituloLower.indexOf(termino) >= 0 || prod.categoria.indexOf(termino) >= 0){
        this.productosFiltrados.push(prod);
      }
    });
  }
}
