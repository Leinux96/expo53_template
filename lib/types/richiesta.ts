export interface RichiestaAssistenza {
  id: string;
  stato: string;
  dataRicezione: string;
  psicologoAssegnatoId: number;
  pazienteId: number;
  nota?: string;
}

export interface HandleRichiestaParams {
  richiestaId: string;
  psicologoId: number;
  accettato: boolean;
  nota?: string;
}

export interface MotivoMapping {
  stato: string;
  nota: string;
}

export const MOTIVI_MAPPING: Record<string, MotivoMapping> = {
  "Il costo è troppo alto": {
    stato: "NON_PRESA_IN_CARICO",
    nota: "Il costo è troppo alto.",
  },
  "Solo psicoterapia in presenza": {
    stato: "NON_PRESA_IN_CARICO",
    nota: "La persona contattata ha richiesto un trattamento psicologico in presenza che non posso offrire.",
  },
  "Non è pronto ad intraprendere una psicoterapia": {
    stato: "NON_PRESA_IN_CARICO",
    nota: "La persona contattata non è pronta ad intraprendere un percorso di psicoterapia.",
  },
  "Vuole solo l'influencer di riferimento": {
    stato: "NON_PRESA_IN_CARICO",
    nota: "La persona contattata ha richiesto specificamente l'influencer di riferimento.",
  },
}; 