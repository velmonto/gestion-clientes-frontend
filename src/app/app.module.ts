import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ResgitrarClienteComponent } from './resgitrar-cliente/resgitrar-cliente.component';
import { FormsModule } from '@angular/forms';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ClienteDetallesComponent } from './cliente-detalles/cliente-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    ResgitrarClienteComponent,
    ActualizarClienteComponent,
    ClienteDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
