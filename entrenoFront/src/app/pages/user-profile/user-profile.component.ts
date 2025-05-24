import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  errorMessage: string = '';
  isEditing: boolean = false;
  passwordVisible: boolean = false;
  editData: any = {};
  confirmPassword: string = '';

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuarioService.cargarUsuario();
    this.user = this.usuarioService.getUsuario();
    this.editData = { ...this.user };
  }

  get isAdmin(): boolean {
    return this.usuarioService.esAdmin();
  }

  toggleEditForm() {
    this.isEditing = !this.isEditing;
    this.confirmPassword = '';
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  get passwordsNoCoinciden(): boolean {
    return this.editData.password !== this.confirmPassword && this.editData.password.length > 0;
  }

  updateUser() {
    if (this.passwordsNoCoinciden) return;

    const datosActualizados = {
      password: this.editData.password,
      email: this.isAdmin ? this.editData.email : undefined,
      telefono1: this.isAdmin ? this.editData.telefono1 : undefined,
      telefono2: this.isAdmin ? this.editData.telefono2 : undefined
    };

    this.http.put(`http://localhost:8080/api/usuarios/${this.user.id}`, datosActualizados).subscribe(
      () => {
        alert('Datos actualizados con éxito');
        this.usuarioService.cargarUsuario(); // recargar desde el backend
        this.toggleEditForm();
      },
      (error) => {
        console.error('Error al actualizar usuario:', error);
      }
    );
  }
}
