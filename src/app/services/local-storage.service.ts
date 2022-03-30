import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  usuario: Usuario = new Usuario();

  constructor() {
    this.usuario.id = 1;
    this.usuario.nombre = 'Nicanor';
    this.usuario.apellido = 'Cellati';
    this.usuario.correo = 'garrotino28@gmail.com'
   }
}
