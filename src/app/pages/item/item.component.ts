import { ProductosDescricion } from './../../Interfaces/productosDescripcion.interfaces';
import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto!: ProductosDescricion;
  id: string='';

  constructor(private route: ActivatedRoute,
              private productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros =>{
      this.productosService.getProductos(parametros['id']).
        subscribe((resp: ProductosDescricion) =>{
          this.producto = resp;
          this.id = parametros['id'];
      });
    });
  }

}
