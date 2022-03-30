import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  addClienteInLocalStorage(cliente: Cliente) {
    let clientesAntiguos: Array<Cliente> = this.clientesLocalStorage;
    cliente.id = clientesAntiguos.length + 1;
    clientesAntiguos.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientesAntiguos))
  }

  get clientesLocalStorage(): Array<Cliente> {
    if (localStorage.getItem("clientes") === null) {
      return new Array<Cliente>();
    } else {
      let clientesDesdeLocalStorage: Array<Cliente> = JSON.parse(localStorage.getItem("clientes") || '{}');
      return clientesDesdeLocalStorage;
    }
  }
}
