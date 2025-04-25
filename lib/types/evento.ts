export interface Evento {
  id: number;
  titolo: string;
  da: string;
  a: string;
  colore: string;
  pazienteId?: number;
  fatto: boolean;
}

export interface FetchEventiParams {
  da: Date;
  a: Date;
  page?: number;
  size?: number;
  calendarioId: number;
} 