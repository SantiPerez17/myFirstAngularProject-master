import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.scss']
})
export class AgregarClientesComponent implements OnInit {

  formAddCliente!: FormGroup;
  cliente: Cliente = new Cliente();

  constructor(public fb: FormBuilder, public clientesService: ClientesService) { }

  ngOnInit(): void {
    this.formAddCliente = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required]
    })
  }

  addCliente() {
    this.cliente = this.formAddCliente.value as Cliente;
    this.clientesService.addClienteInLocalStorage(this.cliente);
    this.formAddCliente.reset();
  }

}
