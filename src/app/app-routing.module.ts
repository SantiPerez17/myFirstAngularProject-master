import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarArticuloComponent } from './controller/articulo/agregar-articulo/agregar-articulo.component';
import { ArticuloDetalleComponent } from './controller/articulo/articulo-detalle/articulo-detalle.component';
import { ArticuloComponent } from './controller/articulo/articulo.component';
import { AgregarClientesComponent } from './controller/clientes/agregar-clientes/agregar-clientes.component';
import { ClientesComponent } from './controller/clientes/clientes.component';
import { CoreComponent } from './controller/core/core.component';
import { HomeComponent } from './controller/home/home.component';
import { LoginComponent } from './controller/login/login.component';
import { ListadoPedidosComponent } from './controller/pedidos/listado-pedidos/listado-pedidos.component';
import { PedidoDetallesComponent } from './controller/pedidos/pedido-detalles/pedido-detalles.component';
import { PedidosComponent } from './controller/pedidos/pedidos.component';
import { PerfilComponent } from './controller/perfil/perfil.component';
import { AgregarProductosComponent } from './controller/productos/agregar-productos/agregar-productos.component';
import { ProductosComponent } from './controller/productos/productos.component';
import { TitulosComponent } from './controller/titulos/titulos.component';
import { AgregarUsuariosComponent } from './controller/usuarios/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './controller/usuarios/editar-usuarios/editar-usuarios.component';
import { UsuariosComponent } from './controller/usuarios/usuarios.component';

const routes: Routes = [

  {
    path: '',
    component: TitulosComponent
  },
  {
    path: 'titulos',
    component: TitulosComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    children: [
      {
        path: 'agregar', component: AgregarUsuariosComponent
      },
      {
        path: 'editar', component: EditarUsuariosComponent
      }
    ]
  },
  {
    path: 'articulos',
    component: ArticuloComponent
  },
  {
    path: 'articuloDetalle',
    component: ArticuloDetalleComponent
  },
  {
    path: 'agregarArticulo/:esNuevo',
    component: AgregarArticuloComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'pedidos',
    component: PedidosComponent
  },
  {
    path: 'agregarCliente',
    component: AgregarClientesComponent
  },
  {
    path: 'agregarProducto',
    component: AgregarProductosComponent
  },
  {
    path: 'listadoPedidos',
    component: ListadoPedidosComponent
  },
  {
    path: 'core',
    component: CoreComponent
  },
  {
    path: 'pedidoDetalles/:idPedido',
    component: PedidoDetallesComponent
  }      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
