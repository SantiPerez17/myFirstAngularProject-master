import { Component, OnInit } from '@angular/core';
import { PedidoDetalle } from 'src/app/models/pedidoDetalle';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor(public pedidoService: PedidoService) { }

  ngOnInit(): void {
  }

  calcularTotal(posicion: number) {
    this.pedidoService.pedido.updateCantidades(posicion);
    this.pedidoService.saveInLocalStorage;
  }

  guardar() {
    this.pedidoService.guardarPedido();
  }

  eliminar(posicion: number) {
    this.pedidoService.pedido.pedidoDetalle.splice(1, posicion);
    this.pedidoService.saveInLocalStorage;
  }

}
