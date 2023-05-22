import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/productos.model'



@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carritoProductos: Producto[] = [];
 
  private _productos: BehaviorSubject<Producto[]>;

  constructor() { 
    this._productos = new BehaviorSubject<Producto[]>([]);
  }

  //Devuelve el BehaviorSubject como un observable para poder subscribirse 
  get productos() {
    return this._productos.asObservable();
  }

    //Añade un producto a la lista del carrito y devuelve la lista actualizada
  anadirNuevoProducto(producto: Producto) {
    this.carritoProductos.push(producto);
    this._productos.next(this.carritoProductos)
  }
}
