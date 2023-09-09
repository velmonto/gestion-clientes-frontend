import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ResgitrarClienteComponent } from './resgitrar-cliente/resgitrar-cliente.component';

const routes : Routes = [
  {path: 'clientes',component:ListaClientesComponent},
  {path: '',redirectTo:'clientes',pathMatch:'full'},
  {path: 'resgistrar-cliente',component: ResgitrarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
