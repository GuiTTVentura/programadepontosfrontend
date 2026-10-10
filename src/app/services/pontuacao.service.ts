import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HistoricoPontos,
  LancamentoCompra,
  ResgateRecompensa,
} from '../models/pontuacao.model';
import { Cliente } from '../models/cliente.model';

@Injectable({ providedIn: 'root' })
export class PontuacaoService {
  private readonly http = inject(HttpClient);
  private readonly enderecoApi = 'http://localhost:8080/api/pontuacao';

  lancarCompra(dados: LancamentoCompra): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.enderecoApi}/lancar-compra`, dados);
  }

  resgatarRecompensa(dados: ResgateRecompensa): Observable<HistoricoPontos> {
    return this.http.post<HistoricoPontos>(`${this.enderecoApi}/resgatar-recompensa`, dados);
  }

  consultarHistorico(clienteId: number): Observable<HistoricoPontos[]> {
    return this.http.get<HistoricoPontos[]>(`${this.enderecoApi}/historico/${clienteId}`);
  }
}
