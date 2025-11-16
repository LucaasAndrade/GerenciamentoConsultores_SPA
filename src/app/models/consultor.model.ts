import { AreaDeAtuacao } from './area-de-atuacao.model';

export interface Consultor {
  id?: string; // Opcional, pois um novo consultor ainda não tem ID
  nome: string;
  email: string;
  telefone: string;
  areaDeAtuacao: AreaDeAtuacao;
  dataDeCriacao: Date;
  ultimoUpdate: Date;
}
