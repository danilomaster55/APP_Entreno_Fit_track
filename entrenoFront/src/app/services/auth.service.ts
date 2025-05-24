import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loggedIn = new BehaviorSubject<boolean>(this.hasUser()); 
  isLoggedIn$ = this.loggedIn.asObservable(); 

  constructor(private usuarioService: UsuarioService) {}

  private hasUser(): boolean {
    return localStorage.getItem('username') !== null; 
  }

  login(username: string, token: string) {
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
    this.usuarioService.limpiarUsuario();
    this.loggedIn.next(true); 
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.loggedIn.next(false); 
  }
}

