import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  passwordVisible: boolean = false;
  errorMessage: string = ''; // Mensaje de error en caso de fallo en el login

  constructor(private http: HttpClient, private router: Router, private authService: AuthService, private usuarioService: UsuarioService) {}

  get isButtonEnabled(): boolean {
    return this.username.trim() !== '' && this.password.trim() !== '';
  }

  onLogin() {
    this.http.post<{ token: string, username: string }>('http://localhost:8080/api/usuarios/login', {
      username: this.username,
      password: this.password
    }).subscribe(
      (response) => {
        console.log('Respuesta del backend:', response);

        // Guardar usuario en AuthService para actualizar la navbar dinámicamente
        this.authService.login(response.username, response.token);
        this.usuarioService.cargarUsuario();
        // Redirigir a la página de menu para el usuario
        this.router.navigate(['/menu-user']);
      },
      (error) => {
        console.error('Error en el login:', error);
        this.errorMessage = 'Usuario o contraseña incorrectos. Inténtalo de nuevo.';
      }
    );
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
