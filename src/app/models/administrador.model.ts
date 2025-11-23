export interface Administrador {
  id_admin?: string; // Optional, as a new administrator might not have an ID yet
  login: string;
  password: string;
  data_criacao: Date;
  ultimo_update: Date;
}
