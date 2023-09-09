import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ResgitrarClienteComponent } from './resgitrar-cliente/resgitrar-cliente.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';

const routes : Routes = [
  {path: 'clientes',component:ListaClientesComponent},
  {path: '',redirectTo:'clientes',pathMatch:'full'},
  {path: 'resgistrar-cliente',component: ResgitrarClienteComponent},
  {path: 'actualizar-cliente/cliente_id', component: ActualizarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
