import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.scss']
})
export class ListadoPedidosComponent implements OnInit {

  constructor(public pedidoService: PedidoService, public router: Router) { }

  ngOnInit(): void {
  }

  verDetalle(idPedido: number) {
    this.router.navigate(['pedidoDetalles', idPedido])
  }

}
