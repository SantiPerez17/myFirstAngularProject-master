import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public usuarioInyectable: LocalStorageService, public pedidoService: PedidoService) {}

  ngOnInit() {
  }

}

