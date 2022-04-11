import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { User } from 'src/app/models/user';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {

  formNewArticle!: FormGroup;
  users: Array<User> = new Array<User>();
  articulo: Articulo = new Articulo();
  esNuevo: boolean = true;

  constructor(public inyectarArticulo: ArticuloService, public fbGenerador: FormBuilder, public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.esNuevo = JSON.parse(this.rutaActiva.snapshot.params.esNuevo);

    this.formNewArticle = this.fbGenerador.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required]
    })

    if (!this.esNuevo) {
      this.articulo = this.inyectarArticulo.articulo;
      this.formNewArticle.setValue({
        title: this.articulo.title,
        body: this.articulo.body,
        userId: this.articulo.userId
      })
     }

    this.inyectarArticulo.allUsers().subscribe((allUsers) => {
      this.users = allUsers;
     });
  }

  addArticle() {
    this.articulo = this.formNewArticle.value as Articulo;
    this.inyectarArticulo.guardarArticulo(this.articulo).subscribe((_articuloR) => {
      console.log("Has agregado articulo de forma exitosa")
      this.formNewArticle.reset();
     })
  }

  updateArticle() {
    this.articulo = this.formNewArticle.value as Articulo;
    this.articulo.id = this.inyectarArticulo.articulo.id;
    this.inyectarArticulo.updateAtricle(this.articulo).subscribe((_articuloA) => {
      console.log("Se actualizo correctamente")
    })
   }

}
