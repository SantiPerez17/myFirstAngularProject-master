import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PedidoDetalle } from 'src/app/models/pedidoDetalle';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-datos-de-los-detalles',
  templateUrl: './datos-de-los-detalles.component.html',
  styleUrls: ['./datos-de-los-detalles.component.scss']
})
export class DatosDeLosDetallesComponent implements OnInit {

  @Input() pedidoDetalle: PedidoDetalle[] = new Array<PedidoDetalle>()
  @Output() seEliminoUnProducto = new EventEmitter();

  constructor(public pedidoService: PedidoService) { }

  ngOnInit(): void {
  }

  eliminar(posicion: number) {
    this.seEliminoUnProducto.emit({index: posicion});
  }
}
