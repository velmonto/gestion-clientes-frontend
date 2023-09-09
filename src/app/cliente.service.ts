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
}
