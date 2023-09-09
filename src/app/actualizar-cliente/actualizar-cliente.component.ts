import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent {

  cliente : Cliente = new Cliente();

  constructor(private clienteServicio:ClienteService, private router:Router){}

  ngOnInit(): void {
    console.log(this.cliente);
  }

  actualizarCliente(){
    this.clienteServicio.registrarCliente(this.cliente).subscribe(dato =>{
      console.log(dato);
    }, error => console.log(error));
  }

  irALaListaDeClientes(){
    this.router.navigate(['/clientes']);
  }
}
