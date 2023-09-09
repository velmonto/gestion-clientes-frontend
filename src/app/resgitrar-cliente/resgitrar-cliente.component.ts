import { Component, OnInit, Output } from '@angular/core';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-resgitrar-cliente',
  templateUrl: './resgitrar-cliente.component.html',
  styleUrls: ['./resgitrar-cliente.component.css']
})
export class ResgitrarClienteComponent implements OnInit {

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

  guardarCliente(){
    this.clienteServicio.registrarCliente(this.cliente).subscribe(dato =>{
      this.clearCliente();      
    }, error => console.log(error));
    window.location.reload();
  }

  clearCliente(){
    this.cliente = new Cliente();
  }

  onSubmit(){
    this.guardarCliente();
    this.obtenerClientes();
    this.router.navigate(['/clientes']);
  }
}
