import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit{

  clientes:Cliente[];
  cliente:Cliente = new Cliente();
  constructor(private clienteServicio:ClienteService, private router:Router){}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  private obtenerClientes(){
    this.clienteServicio.obtenerListaDeClientes().subscribe(dato => {
      this.clientes = dato;
    });
  }

}
