import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flag } from '../models/flag';

@Injectable({
  providedIn: 'root',
})
export class FlagService {
  private apiUrl = 'http://localhost:8080/api/flags'; 

  constructor(private http: HttpClient) {}

  // Obtener todas las flags
  getFlags(): Observable<Flag[]> {
    return this.http.get<Flag[]>(this.apiUrl);
  }

  // Obtener una flag por ID
  getFlagById(id: number): Observable<Flag> {
    return this.http.get<Flag>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva flag
  createFlag(flag: Flag): Observable<Flag> {
    return this.http.post<Flag>(this.apiUrl, flag);
  }

  // Actualizar una flag existente
  updateFlag(id: number, flag: Flag): Observable<Flag> {
    return this.http.put<Flag>(`${this.apiUrl}/${id}`, flag);
  }

  // Eliminar una flag
  deleteFlag(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
