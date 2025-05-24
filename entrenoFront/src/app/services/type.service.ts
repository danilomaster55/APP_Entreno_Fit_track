import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private apiUrl = 'http://localhost:8080/api/types'; // Ruta base del backend

  constructor(private http: HttpClient) {}

  getTypes(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getTypeById(typeId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${typeId}`);
  }

  createType(type: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, type);
  }

  updateType(typeId: number, type: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${typeId}`, type);
  }

  deleteType(typeId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${typeId}`);
  }
}
