export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface AuthData {
  token: string;
  email: string;
  id: number;
  calendarioId: number | undefined;
} 