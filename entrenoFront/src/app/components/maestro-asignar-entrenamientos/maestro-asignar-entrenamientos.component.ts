import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maestro-asignar-entrenamientos',
  templateUrl: './maestro-asignar-entrenamientos.component.html',
  styleUrls: ['./maestro-asignar-entrenamientos.component.css']
})
export class MaestroAsignarEntrenamientosComponent implements OnInit {
  usuarios: any[] = [];
  entrenamientos: any[] = [];
  asignaciones: any[] = [];

  usuarioSeleccionadoId: number | null = null;
  entrenamientoSeleccionadoId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarEntrenamientos();
  }

  cargarUsuarios() {
    this.http.get<any[]>('http://localhost:8080/api/usuarios')
      .subscribe(data => this.usuarios = data);
  }

  cargarEntrenamientos() {
    this.http.get<any[]>('http://localhost:8080/api/entrenamientos')
      .subscribe(data => this.entrenamientos = data);
  }

  cargarAsignaciones(usuarioId: number) {
    this.http.get<any[]>(`http://localhost:8080/api/entrenamientos-usuario/usuario/${usuarioId}`)
      .subscribe(data => this.asignaciones = data);
  }

  asignarEntrenamiento() {
    if (!this.usuarioSeleccionadoId || !this.entrenamientoSeleccionadoId) {
      alert('Selecciona usuario y entrenamiento');
      return;
    }

    const payload = {
      usuario: { id: this.usuarioSeleccionadoId },
      entrenamiento: { id: this.entrenamientoSeleccionadoId }
    };

    this.http.post('http://localhost:8080/api/entrenamientos-usuario', payload)
      .subscribe(() => {
        this.cargarAsignaciones(this.usuarioSeleccionadoId!);
        this.entrenamientoSeleccionadoId = null;
      });
  }

  eliminarAsignacion(id: number) {
    if (confirm('¿Eliminar esta asignación?')) {
      this.http.delete(`http://localhost:8080/api/entrenamientos-usuario/${id}`)
        .subscribe(() => {
          if (this.usuarioSeleccionadoId) {
            this.cargarAsignaciones(this.usuarioSeleccionadoId);
          }
        });
    }
  }

  onUsuarioSeleccionado() {
    if (this.usuarioSeleccionadoId) {
      this.cargarAsignaciones(this.usuarioSeleccionadoId);
    }
  }
}
