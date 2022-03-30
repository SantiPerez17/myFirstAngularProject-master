import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  addProductoInLocalStorage(producto: Producto) {
    let productosActuales: Array<Producto> = this.productosLocalStorage;
    producto.id = productosActuales.length + 1;
    productosActuales.push(producto);
    localStorage.setItem("productos", JSON.stringify(productosActuales))
  }

  get productosLocalStorage(): Array<Producto> {
    if (localStorage.getItem("productos") === null) {
      return new Array<Producto>();
    } else {
      let productosDesdeLocalStorage: Array<Producto> = JSON.parse(localStorage.getItem("productos") || '{}');
      return productosDesdeLocalStorage;
    }
  }
}
