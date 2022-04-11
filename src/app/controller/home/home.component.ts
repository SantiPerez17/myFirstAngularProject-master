import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { Cliente } from 'src/app/models/cliente';
import { ArticuloService } from 'src/app/services/articulo.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  
export class HomeComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>();
  clientes: Array<Cliente> = new Array<Cliente>();

  constructor(public usuarioLogeado: LocalStorageService, public articuloInyectado: ArticuloService,
    public clienteService: ClientesService, public ruta: Router, public pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.articuloInyectado.leerNoticias().subscribe((articulosDesdeLaApi) => {
      this.articulos = articulosDesdeLaApi;
    });
    this.clientes = this.clienteService.clientesLocalStorage;
  }

  buscarCliente(nombreABuscar: string) {
    console.log("Valor recibido: ", nombreABuscar)
    this.clientes = this.clienteService.clientesLocalStorage.filter(cliente => {
      return cliente.nombre.toLocaleLowerCase().includes(nombreABuscar.toLocaleLowerCase()) 
    })  
  }

  irASeleccionarProducto(cliente: Cliente) {
    this.pedidoService.pedido.clienteId = cliente.id;
    this.pedidoService.pedido.nombreCliente = `${cliente.nombre} ${cliente.apellido}`;
    this.pedidoService.saveInLocalStorage();
    this.ruta.navigateByUrl("/productos");
  }
}
