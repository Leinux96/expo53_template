export interface Tariffa {
  id: number;
  nome: string;
  dataCreazione: string;
  importo: number;
  pazienteId: number;
}

export interface CreateTariffaDTO {
  nome: string;
  importo: number;
}

export interface CreateTariffaPazienteDTO extends CreateTariffaDTO {
  pazienteId: number;
} 