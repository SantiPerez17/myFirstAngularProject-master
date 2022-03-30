import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pedido-detalles',
  templateUrl: './pedido-detalles.component.html',
  styleUrls: ['./pedido-detalles.component.scss']
})
export class PedidoDetallesComponent implements OnInit {

  idPedido!: number;
  pedido: Pedido = new Pedido();

  constructor(public rutaActiva: ActivatedRoute, public pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.idPedido = JSON.parse(this.rutaActiva.snapshot.params.idPedido);
    this.pedido = this.pedidoService.getPedidoById(this.idPedido);
  }

  elHijoEliminoAlgo(evento: any) {
    this.pedido.pedidoDetalle.splice(evento.index, 1);
    Swal.fire({
      icon: 'warning',
      title: 'Exito!',
      text: 'Producto eliminado!',
    })
  }

}
