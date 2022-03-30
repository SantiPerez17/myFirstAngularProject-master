import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './controller/titulos/titulos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './controller/usuarios/usuarios.component';
import { EditarUsuariosComponent } from './controller/usuarios/editar-usuarios/editar-usuarios.component';
import { AgregarUsuariosComponent } from './controller/usuarios/agregar-usuarios/agregar-usuarios.component';
import { ArticuloComponent } from './controller/articulo/articulo.component';
import { ArticuloDetalleComponent } from './controller/articulo/articulo-detalle/articulo-detalle.component';
import { LoginComponent } from './controller/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './controller/home/home.component';
import { PerfilComponent } from './controller/perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarArticuloComponent } from './controller/articulo/agregar-articulo/agregar-articulo.component';
import { PedidosComponent } from './controller/pedidos/pedidos.component';
import { ProductosComponent } from './controller/productos/productos.component';
import { ClientesComponent } from './controller/clientes/clientes.component';
import { AgregarClientesComponent } from './controller/clientes/agregar-clientes/agregar-clientes.component';
import { AgregarProductosComponent } from './controller/productos/agregar-productos/agregar-productos.component';
import { ClientesService } from './services/clientes.service';
import { ProductoService } from './services/producto.service';
import { PedidoService } from './services/pedido.service';
import { ListadoPedidosComponent } from './controller/pedidos/listado-pedidos/listado-pedidos.component';
import { CoreComponent } from './controller/core/core.component';
import { PrimerHijoComponent } from './controller/core/primer-hijo/primer-hijo.component';
import { PedidoDetallesComponent } from './controller/pedidos/pedido-detalles/pedido-detalles.component';
import { DatosDeLosDetallesComponent } from './controller/pedidos/datos-de-los-detalles/datos-de-los-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    NavbarComponent,
    UsuariosComponent,
    EditarUsuariosComponent,
    AgregarUsuariosComponent,
    ArticuloComponent,
    ArticuloDetalleComponent,
    LoginComponent,
    HomeComponent,
    PerfilComponent,
    AgregarArticuloComponent,
    PedidosComponent,
    ProductosComponent,
    ClientesComponent,
    AgregarClientesComponent,
    AgregarProductosComponent,
    ListadoPedidosComponent,
    CoreComponent,
    PrimerHijoComponent,
    PedidoDetallesComponent,
    DatosDeLosDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClientesService,
    ProductoService,
    PedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
