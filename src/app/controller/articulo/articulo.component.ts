
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>();

  constructor(public usuarioLogeado: LocalStorageService, public articuloInyectado: ArticuloService, public ruta: Router) { }

  ngOnInit(): void {
      this.articuloInyectado.leerNoticias().subscribe((articulosDesdeLaApi) => {
      this.articulos = articulosDesdeLaApi;
    });
    
    let articulo: Articulo = new Articulo;

    this.articuloInyectado.guardarArticulo(articulo).subscribe((articuloCreado) => {
      this.articulos.push(articuloCreado);
     });

  }

  inyectarActiculoEnService(articulo: Articulo) {
    this.articuloInyectado.articulo = articulo;
    this.ruta.navigate(['articuloDetalle'])
  }

  goToAddOrUpdateArticle(esNuevo: boolean) {
    this.ruta.navigate(['agregarArticulo', esNuevo])
  }

  deleteArticle(id: number) {
    this.articuloInyectado.deleteArticle(id).subscribe((articuloBorrado) => {
      console.log("Articulo eliminado: ", articuloBorrado)
     });
  }

  goTorUpdateArticle(esNuevo: boolean, articulo: Articulo) {
    this.articuloInyectado.articulo = articulo;
    this.ruta.navigate(['agregarArticulo', esNuevo])
   }
}
