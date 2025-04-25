export enum CalendarioType {
  remote = "remoto",
  local_patient = "locale_paziente",
  local_generic = "locale_generico",
}

export interface CalendarioBase {
  id: number;
  type: CalendarioType;
}

export interface Calendario {
  id: number;
  nome: string;
  colore: string;
  psicologoId: number;
  syncStatus?: string;
  type?: CalendarioType;
  createdAt?: string;
  updatedAt?: string;
}

export interface FetchCalendariParams {
  psicologoId: number;
  type?: CalendarioType;
}
