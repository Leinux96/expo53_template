import { Nota } from "./Note";
import { RichiestaAssistenza } from "./richiestaAssistenza";

export enum PazienteType {
  local,
  remote,
}

export interface Paziente {
  id: number;
  email: string;
  nome: string;
  cognome: string;
  telefono: string;
  citta: string;
  dataRegistrazione: string;
  richieste: RichiestaAssistenza[];
  note: Nota[];
  type: PazienteType;
}
