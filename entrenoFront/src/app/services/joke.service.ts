import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getJokes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/jokes`)
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  getTypes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/types`);
  }

  getLanguages(): Observable<any> {
    return this.http.get(`${this.apiUrl}/languages`);
  }

  getFlags(): Observable<any> {
    return this.http.get(`${this.apiUrl}/flags`); 
  }

  createJoke(joke: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/jokes`, joke);
  }

  deleteJoke(jokeId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/jokes/${jokeId}`);
  }

  getJokeById(jokeId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/jokes/${jokeId}`);
  }
  
  updateJoke(jokeId: number, joke: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/jokes/${jokeId}`, joke);
  }
  

  
  getCategoryById(categoryId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories/${categoryId}`);
  }
  
  createCategory(category: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/categories`, category);
  }
  
  updateCategory(categoryId: number, category: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/categories/${categoryId}`, category);
  }
  
  deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/categories/${categoryId}`);
  }
  

  
  
}
