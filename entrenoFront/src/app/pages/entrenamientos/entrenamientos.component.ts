import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.component.html',
  styleUrls: ['./entrenamientos.component.css']
})
export class EntrenamientosComponent implements OnInit {
  entrenamientosBase: any[] = [];
  entrenamientosUsuario: any[] = [];
  entrenamientoSeleccionado: any = null;
  usuarioId: number | null = null;

  constructor(private usuarioService: UsuarioService, private http: HttpClient) {}

  ngOnInit(): void {
    const usuario = this.usuarioService.getUsuario();
    this.usuarioId = usuario?.id;

    this.obtenerEntrenamientosBase();
    this.obtenerEntrenamientosUsuario();
  }

  obtenerEntrenamientosBase(): void {
    this.http.get<any[]>('http://localhost:8080/api/entrenamientos/base')
      .subscribe(data => this.entrenamientosBase = data);
  }

  obtenerEntrenamientosUsuario(): void {
    this.http.get<any[]>(`http://localhost:8080/api/entrenamientos/usuario/${this.usuarioId}`)
      .subscribe(data => this.entrenamientosUsuario = data);
  }

  seleccionarEntrenamiento(entrenamientoBase: any): void {
  const id = entrenamientoBase.id;

  this.http.get<any[]>(`http://localhost:8080/api/entrenamiento-ejercicio/entrenamiento/${id}`)
    .subscribe(relaciones => {
      if (relaciones.length === 0) {
        console.warn('Entrenamiento sin ejercicios');
        return;
      }

      // Secciones agrupadas
      const calentamiento: any[] = [];
      const principal: any[] = [];
      const calma: any[] = [];

      relaciones.forEach(rel => {
        const ejercicio = rel.ejercicio;

        // Añadimos datos personalizados si quieres mostrarlos o usarlos
        ejercicio.valorPersonalizado = rel.valorPersonalizado;
        ejercicio.descansoPersonalizado = rel.descansoPersonalizado;

        // Clasificación por orden (1 = calentamiento, 2 = principal, 3 = calma)
        switch (rel.orden) {
          case 1: calentamiento.push(ejercicio); break;
          case 2: principal.push(ejercicio); break;
          case 3: calma.push(ejercicio); break;
        }
      });

      // Armar el objeto de entrenamiento completo
      const entrenamientoCompleto = {
        id,
        nombre: relaciones[0].entrenamiento.nombre,
        descripcion: relaciones[0].entrenamiento.descripcion,
        intensidad: relaciones[0].entrenamiento.intensidad,
        creadoPor: relaciones[0].entrenamiento.creadoPor,
        fechaCreacion: relaciones[0].entrenamiento.fechaCreacion,
        calentamiento,
        principal,
        calma
      };

      // Enviamos al componente crear-entrenamiento
      this.entrenamientoSeleccionado = entrenamientoCompleto;
    });
}

eliminarEntrenamiento(entrenamiento: any): void {
  const confirmacion = confirm(`¿Estás seguro de que quieres eliminar "${entrenamiento.nombre}"?`);

  if (!confirmacion) return;

  this.http.delete(`http://localhost:8080/api/entrenamientos/${entrenamiento.id}`)
    .subscribe({
      next: () => {
        this.entrenamientosUsuario = this.entrenamientosUsuario.filter(e => e.id !== entrenamiento.id);
        if (this.entrenamientoSeleccionado?.id === entrenamiento.id) {
          this.entrenamientoSeleccionado = null;
        }
      },
      error: (err) => {
        console.error('❌ Error al eliminar el entrenamiento', err);
        alert('❌ Error al eliminar el entrenamiento');
      }
    });
}

}

