export interface Consultor {
  id?: string; // Opcional, pois um novo consultor ainda não tem ID
  nome: string;
  email: string;
  telefone: string;
  area_atuacao: string;
  dataDeCriacao: Date;
  ultimoUpdate: Date;
}
