export interface ProfiloPsicologo {
  psicologoId: number;
  fotoId: number;
  biografia: {
    id: number;
    formazione: string | null;
    certificazioni: string | null;
    specializzazioni: string | null;
    biografiaProfessionale: string | null;
    dataAggiornamento: string | null;
  };
  social: any[];
}

export interface Psicologo {
  id: number;
  nome: string;
  cognome: string;
  qualifica: string;
  areaGeografica: string;
  email: string | null;
  meseAnnoCorrente: string;
  numeroSlotMeseCorrente: number;
  meseAnnoProssimo: string;
  numeroSlotMeseProssimo: number;
  calendarioCircuitoId: number;
  fotoId: number;
} 