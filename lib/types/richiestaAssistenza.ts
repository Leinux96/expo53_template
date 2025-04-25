export interface RichiestaAssistenza {
  id: number;
  influencerId: number;
  pazienteId: number;
  dataRicezione: string;
  emailMittente: string;
  nomeMittente: string;
  cognomeMittente: string;
  cittaMittente: string;
  telefonoMittente: string;
  social: string | null;
  preferenzaOrario: string | null;
  tipoDisagio: string | null;
  tipoGestione: string | null;
  tipoTerapia: string | null;
  esigenzeSpecifiche: string | null;
  attualeStato: string;
  moduloCompilato: string;
  eta: number | null;
}
