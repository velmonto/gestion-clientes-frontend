import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent {

  id:number;
  cliente : Cliente = new Cliente();
  constructor(private clienteServicio:ClienteService, private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteServicio.obtenerClientePorId(this.id).subscribe(dato => {
      this.cliente = dato;
    }, error => console.log(error));
  }

  actualizarCliente(){
    this.clienteServicio.registrarCliente(this.cliente).subscribe(dato =>{
      console.log(dato);
    }, error => console.log(error));
  }

  irALaListaDeClientes(){
    this.router.navigate(['clientes']);
  }

  onSubmit(){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas modificar al empleado",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modifcalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.clienteServicio.actualizarCliente(this.id,this.cliente).subscribe(dato => {
          console.log(dato);
          this.irALaListaDeClientes();
          swal(
            'Empleado modificaco',
            'El empleado ha sido modificado con exito',
            'success'
          )
        })
      }
    })
  }
}
