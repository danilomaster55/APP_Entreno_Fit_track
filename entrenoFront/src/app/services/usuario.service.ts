import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/api/usuarios';
  private usuarioSubject = new BehaviorSubject<any>(null); // observable interno

  constructor(private http: HttpClient) {}

  obtenerPorUsername(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/detalles/${username}`);
  }

  cargarUsuario(): void {
    const username = localStorage.getItem('username');
    if (username) {
      this.obtenerPorUsername(username).subscribe(
        user => this.usuarioSubject.next(user),
        err => console.error('Error al cargar usuario:', err)
      );
    }
  }

  getUsuario(): any {
    return this.usuarioSubject.value;
  }

  getUsuarioObservable(): Observable<any> {
    return this.usuarioSubject.asObservable();
  }

  esAdmin(): boolean {
    const user = this.usuarioSubject.value;
    return user?.tipoUsuario?.nombre === 'ADMIN';
  }
  limpiarUsuario(): void {
    this.usuarioSubject.next(null);
  }
  
}
