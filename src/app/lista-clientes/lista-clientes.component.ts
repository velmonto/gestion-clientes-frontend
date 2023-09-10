import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[];
  cliente: Cliente = new Cliente();
  constructor(
    private clienteServicio: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerClientes();
  }

  private obtenerClientes() {
    this.clienteServicio.obtenerListaDeClientes().subscribe((dato) => {
      this.clientes = dato;
    });
  }

  actualizarCliente(id: number) {
    this.router.navigate(['actualizar-cliente', id]);
  }

  eliminarCliente(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.clienteServicio.eliminarCliente(id).subscribe(dato => {
          console.log(dato);
          this.obtenerClientes();
          swal(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelcliente(id: number) {
    this.router.navigate(['cliente-detalles', id]);
  }
}
