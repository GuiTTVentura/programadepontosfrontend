import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private readonly http = inject(HttpClient);
  private readonly enderecoApi = 'http://localhost:8080/api/clientes';

  listarTodos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.enderecoApi);
  }

  cadastrar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.enderecoApi, cliente);
  }

  buscarPorCpf(cpf: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.enderecoApi}/cpf/${encodeURIComponent(cpf)}`);
  }
}
