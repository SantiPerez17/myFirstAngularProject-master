import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { User } from 'src/app/models/user';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {

  articulo: Articulo = new Articulo();
  user: User = new User();

  constructor(public aritucloInyectado: ArticuloService) {
    this.articulo = aritucloInyectado.articulo;
   }

  ngOnInit(): void {
    this.aritucloInyectado.obtenerUsuario(this.articulo.userId).subscribe(usuarioDesdeApi => {
      this.user = usuarioDesdeApi;
      console.log("usuario: ", this.user)
    })
  }
}
