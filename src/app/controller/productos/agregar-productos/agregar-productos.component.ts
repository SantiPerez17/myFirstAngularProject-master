import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.scss']
})
export class AgregarProductosComponent implements OnInit {

  constructor(public fb: FormBuilder, public productoService: ProductoService) { }

  formAddProducto!: FormGroup;
  producto: Producto = new Producto();

  ngOnInit(): void {
    this.formAddProducto = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required]
    })
  }

  addProducto() {
    this.producto = this.formAddProducto.value as Producto;
    this.productoService.addProductoInLocalStorage(this.producto);
    this.formAddProducto.reset();
  }

}
