import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(public usuarioInyectable: LocalStorageService) { }

  ngOnInit(): void {
  }

  cambiarNombre() {
    this.usuarioInyectable.usuario.nombre = 'Francina';
  }

}
