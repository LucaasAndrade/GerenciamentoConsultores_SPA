export interface Consultor {
  id_consultor?: string; // Opcional, pois um novo consultor ainda não tem ID
  nome: string;
  email: string;
  telefone: string;
  area_atuacao: string;
  data_criacao: Date;
  ultimo_update: Date;
}
