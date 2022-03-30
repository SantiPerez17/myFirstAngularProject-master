import { PedidoDetalle } from "./pedidoDetalle";
import { Producto } from "./producto";

export class Pedido {
  id!: number;
  clienteId!: number;
  nombreCliente!: string;
  totalPedido!: number;
  pedidoDetalle!: Array<PedidoDetalle>;

  constructor(datos?: Pedido) {
    if (datos != null) {
      this.id = datos.id;
      this.clienteId = datos.clienteId;
      this.nombreCliente = datos.nombreCliente;
      this.totalPedido = datos.totalPedido;
      this.pedidoDetalle = datos.pedidoDetalle;
      return;
    }
    this.clienteId = this.clienteId;
    this.nombreCliente = this.nombreCliente;
    this.totalPedido = this.totalPedido;
    this.pedidoDetalle = new Array<PedidoDetalle>();
  }

  addProducto(producto: Producto) {
    let seDebeAgregar: boolean = true;
    let pedidoDetalle: PedidoDetalle = new PedidoDetalle();
    pedidoDetalle.cantidad = 1;
    pedidoDetalle.nombreProducto = producto.nombre;
    pedidoDetalle.precio = producto.precio;
    pedidoDetalle.productoId = producto.id;
    pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio;
    
    this.pedidoDetalle.forEach(pedido => {
      if (pedido.productoId == pedidoDetalle.productoId) {
        seDebeAgregar = false;
      }
    })

    if (!seDebeAgregar) {
      let posicion = this.pedidoDetalle.findIndex(pedido => pedido.productoId === producto.id)
      this.pedidoDetalle[posicion].cantidad += 1;
      this.pedidoDetalle[posicion].total = this.pedidoDetalle[posicion].cantidad * this.pedidoDetalle[posicion].precio;
    } else {
      this.pedidoDetalle.push(pedidoDetalle)
    }
    this.updateTotalAmount();
  }

  updateTotalAmount() {
    this.totalPedido = 0;
    this.pedidoDetalle.forEach(pedido => {
      this.totalPedido += pedido.total;
    })
  }

  updateCantidades(posicion: number) {
    this.pedidoDetalle[posicion].total = this.pedidoDetalle[posicion].cantidad * this.pedidoDetalle[posicion].precio
    this.updateTotalAmount();
  }
}