import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Array<Producto> = new Array<Producto>();
  
  constructor(public ruta: Router, public productoService: ProductoService, public pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.productos = this.productoService.productosLocalStorage;
  }

  buscarProductos(nombreABuscar: string) {
    this.productos = this.productoService.productosLocalStorage.filter(producto => {
      return producto.nombre.toLocaleLowerCase().includes(nombreABuscar.toLocaleLowerCase()) 
    })  
  }

  agregar(producto: Producto) {
    this.pedidoService.pedido.addProducto(producto)
    this.pedidoService.saveInLocalStorage();
    Swal.fire({
      icon: 'success',
      title: 'Exito!',
      text: 'Producto agregado!',
      footer: '<button class="btn btn-link" (click)="irACarritoDeCompras()">Ya está disponible en su carrito de compras</button>'
    })
  }

  irACarritoDeCompras() {
    this.ruta.navigate(['/pedidos'])
  }

}
