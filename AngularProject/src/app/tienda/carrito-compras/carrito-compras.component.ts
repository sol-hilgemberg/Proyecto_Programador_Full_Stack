import { Component } from '@angular/core';
import { Producto } from '../../models/productos.model';
import { CarritoService } from '../../services/carrito.service';
@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent {

  products: Producto[] = [];

  constructor(private carritoService: CarritoService) {} 

  ngOnInit() {
    this.carritoService.productos.subscribe(productos => {
      console.log(productos);
    })
  }

}
