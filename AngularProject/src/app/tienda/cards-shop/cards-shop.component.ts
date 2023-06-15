import { Component } from '@angular/core';
import { Producto} from '../../models/productos.model';
import { ProductosService } from '../../services/productos.service';
import { CarritoService } from '../../services/carrito.service'

@Component({
  selector: 'app-cards-shop',
  templateUrl: './cards-shop.component.html',
  styleUrls: ['./cards-shop.component.css']
})
export class CardsShopComponent {
  productos: Producto[] = [];

  Productos = [
    {
      imagen: 'Barrita de Proteina.jpg',
      alt: 'barrita proteicas',
      nombre: 'Barritas Proteicas',
      descripcion: 'Barritas con sabor a chocolate de 70 gr con mucha proteina',
      precio: 50,
    },

    {
      imagen: 'Mancuernas-8kg.jpg',
      alt: 'Mancuernas de metal',
      nombre: 'Mancuernas',
      descripcion: 'Mancuernas de 8 kg de metal',
      precio: 100,
    }, 
    
    {
      imagen: 'Prroteina en Polvo.jpg',
      alt: 'Proteina',
      nombre: 'Proteina Whey Protein',
      descripcion: 'Proteina en polvo sabor frutilla de 500 gr',
      precio: 100,
    },
  ]
  constructor(
    private productosService: ProductosService,
    private carritoService: CarritoService,
    )  { }

    //async ngOnInit() {
      //this.productos = (await this.productosService.getAll()).results;
    //}
 

  onClick(producto: Producto) {
    this.carritoService.anadirNuevoProducto(producto);
  }
}
