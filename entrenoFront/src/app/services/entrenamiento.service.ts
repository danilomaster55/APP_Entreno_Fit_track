import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrenamientoService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  obtenerIntensidades(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/intensidades`);
  }

  // Función futura para guardar entrenamiento
  guardarEntrenamiento(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/entrenamientos`, data);
  }
  guardarEntrenamientoEjercicio(relacion: any) {
  return this.http.post(`${this.apiUrl}/entrenamiento-ejercicio`, relacion);
}
subirPDF(formData: FormData) {
  return this.http.post('/api/pdf-entrenamiento', formData);
}

actualizarEntrenamiento(id: number, entrenamiento: any) {
  return this.http.put(`http://localhost:8080/api/entrenamientos/${id}`, entrenamiento);
}



}
