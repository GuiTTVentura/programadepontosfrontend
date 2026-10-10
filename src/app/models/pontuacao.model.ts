export interface LancamentoCompra {
  clienteId: number;
  valorCompra: number;
}

export interface ResgateRecompensa {
  clienteId: number;
  recompensaId: number;
}

export interface HistoricoPontos {
  id: number;
  pontos: number;
  tipoTransacao: string;
  dataHora: string;
  valorCompra?: number;
  saldoMomento?: number;
}
