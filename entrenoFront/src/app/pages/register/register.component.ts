import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  // Controladores para la visibilidad de la contraseña
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      telefono1: ['', Validators.required],
      telefono2: ['']
    });
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.errorMessage = "Por favor, completa todos los campos correctamente.";
      return;
    }

    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.errorMessage = "Las contraseñas no coinciden.";
      return;
    }

    const userData = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      telefono1: this.registerForm.value.telefono1,
      telefono2: this.registerForm.value.telefono2 || null,
      estado: true,
      tipoUsuario: { id: 3 }
    };

    this.http.post('http://localhost:8080/api/usuarios', userData)
      .subscribe(
        response => {
          this.successMessage = "Registro exitoso! Redirigiendo al login...";
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        },
        error => {
          if (error.status === 400) {
            this.errorMessage = "El correo electrónico ya está en uso.";
          } else {
            this.errorMessage = "Error en el registro. Inténtalo más tarde.";
          }
        }
      );
  }
}
