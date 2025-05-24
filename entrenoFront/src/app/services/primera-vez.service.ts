import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrimeraVezService {
  private apiUrl = 'http://localhost:8080/api/primera_vez'; // Ruta del backend

  constructor(private http: HttpClient) {}

  getPrimeraVez(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getPrimeraVezById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createPrimeraVez(primeraVez: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, primeraVez);
  }

  updatePrimeraVez(id: number, primeraVez: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, primeraVez);
  }

  deletePrimeraVez(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
