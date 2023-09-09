import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-resgitrar-cliente',
  templateUrl: './resgitrar-cliente.component.html',
  styleUrls: ['./resgitrar-cliente.component.css']
})
export class ResgitrarClienteComponent implements OnInit {

  cliente : Cliente = new Cliente();

  constructor(private clienteServicio:ClienteService, private router:Router){}

  ngOnInit(): void {
    console.log(this.cliente);
  }

  guardarCliente(){
    this.clienteServicio.registrarCliente(this.cliente).subscribe(dato =>{
      console.log(dato);
    }, error => console.log(error));
  }

  irALaListaDeClientes(){
    this.router.navigate(['/clientes']);
  }
}
