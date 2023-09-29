import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

 productos = [
    { id: 1, name: 'Barrita de Cereal', description: '15 gr de proteina y todo el sabor a manzana', precio: '$100'}
  ]

  constructor() { }
}
