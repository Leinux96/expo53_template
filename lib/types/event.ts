export enum EventoType {
  remote = "remoto",
  local_patient = "locale",
}
export interface Event {
  id: number;
  titolo: string;
  da: string;
  a: string;
  colore: string;
  pazienteId?: number;
  fatto: boolean;
  calendarioId?: number;
  type: EventoType;
}

export interface FetchEventsParams {
  da: Date;
  a: Date;
  page?: number;
  size?: number;
  calendarioId: number;
}
