import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidoDetalle } from '../models/pedidoDetalle';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedido: Pedido = new Pedido();

  constructor() {
    this.pedido = this.ultimoPedido;
  }

  saveInLocalStorage() {
    localStorage.setItem("ultimoPedido", JSON.stringify(this.pedido));
  }

  get ultimoPedido(): Pedido {
    if (localStorage.getItem("ultimoPedido") === null) {
      return new Pedido();
    } else {
      let pedidoDelLocalStorage: Pedido = new Pedido(JSON.parse(localStorage.getItem("ultimoPedido") || '{}'));
      return pedidoDelLocalStorage;
    }
  }

  guardarPedido() {
    let listadoPedidos: Pedido[] = new Array<Pedido>()
    listadoPedidos = this.listadoConPedidosExistentes;
    this.pedido.id = this.listadoConPedidosExistentes.length + 1;
    listadoPedidos.push(this.pedido);
    localStorage.setItem("pedidos", JSON.stringify(listadoPedidos))
    localStorage.removeItem("ultimoPedido");
    this.pedido = new Pedido();
  }

  get listadoConPedidosExistentes(): Pedido[] {
    if (localStorage.getItem("pedidos") === null) {
      return new Array<Pedido>();
    } else {
      let pedidos: Pedido[] = JSON.parse(localStorage.getItem("pedidos") || '{}');
      pedidos.sort((a,b) => b.id - a.id)
      return pedidos;
    }
  }

  getPedidoById(idPedido: number) {
    let pedidos: Pedido[] = this.listadoConPedidosExistentes;
    let pedido = pedidos.find(pedido1 => pedido.id == idPedido)
    return pedido1 as Pedido;
  }
}
