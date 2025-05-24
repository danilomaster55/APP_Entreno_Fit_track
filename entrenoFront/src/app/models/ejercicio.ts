export interface Ejercicio {
    id: number;
    nombre: string;
    descripcion: string;
    rutaMultimedia: string;
    grupoMuscular: GrupoMuscular;
    nivelDificultad: NivelDificultad;
    tipoEjercicio: TipoEjercicio;
    tipoUnidad: TipoUnidad;
    valorSugerido: number;
    equipamientos?: Equipamiento[];
  }
  
  export interface GrupoMuscular {
    id: number;
    nombre: string;
  }
  
  export interface NivelDificultad {
    id: number;
    nivel: string;
  }
  
  export interface TipoEjercicio {
    id: number;
    nombre: string;
  }
  
  export interface TipoUnidad {
    id: number;
    nombre: string;
  }
  
  export interface Equipamiento {
    id: number;
    nombre: string;
  }
  