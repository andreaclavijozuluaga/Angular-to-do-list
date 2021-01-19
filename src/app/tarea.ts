import { Lista } from './lista';

export interface Tarea {
  id: number;
  nombre: string;
  lista: Lista;
  completado: Boolean;
}
