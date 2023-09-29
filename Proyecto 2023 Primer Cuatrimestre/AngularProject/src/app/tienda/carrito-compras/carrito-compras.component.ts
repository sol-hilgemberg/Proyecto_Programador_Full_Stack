import { Component, OnInit  } from '@angular/core';
import { Producto } from '../../models/productos.model';
import { CarritoService } from '../../services/carrito.service';
@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private carritoService: CarritoService) {} 

  //con el subscribirse añade un producto al carrito
  ngOnInit() {
    this.carritoService.productos.subscribe(productos => {
      this.productos = productos;
    })
  }

  //Funcion que llama al servicio del carrito y utiliza el metodo creado para borrar
  onClickBorrar(indice: number) {
    this.carritoService.borrarProducto(indice);
  }

}
