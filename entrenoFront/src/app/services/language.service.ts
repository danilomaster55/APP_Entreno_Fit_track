import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private apiUrl = 'http://localhost:8080/api/languages'; // Ruta base del backend

  constructor(private http: HttpClient) {}

  getLanguages(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getLanguageById(languageId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${languageId}`);
  }

  createLanguage(language: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, language);
  }

  updateLanguage(languageId: number, language: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${languageId}`, language);
  }

  deleteLanguage(languageId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${languageId}`);
  }
}
