import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefonoService {
  private apiUrl = 'http://localhost:8080/api/telefonos'; // Ruta del backend

  constructor(private http: HttpClient) {}

  getTelefonos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getTelefonosByPrimeraVezId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/primera_vez/${id}`);
  }

  createTelefono(telefono: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, telefono);
  }

  updateTelefono(id: number, telefono: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, telefono);
  }

  deleteTelefono(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
