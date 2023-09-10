import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  /*Esta URL obtiene el listado de todos los clientes en el back*/
  private baseURL = "http://localhost:8080/api/v1/clientes";

  constructor(private httpClient: HttpClient) { }

  /** este metodo nos sirve para obtener los clientes */
  obtenerListaDeClientes():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`)
  }

  /**Este metodo sirve para crear un cliente */
  registrarCliente(cliente:Cliente):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,cliente);
  }

  /**Este metodo sirve para actualizar un cliente */
  actualizarCliente(id:number,cliente:Cliente):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,cliente);
  }

  /**Este metodo sirve para actualizar un cliente */
  obtenerClientePorId(id:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
  }

  /**Este metodo sirve para eliminar un cliente */
  eliminarCliente(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
