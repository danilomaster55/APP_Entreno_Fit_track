import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maestro-tipos-ejercicio',
  templateUrl: './maestro-tipos-ejercicio.component.html',
  styleUrls: ['./maestro-tipos-ejercicio.component.css']
})
export class MaestroTiposEjercicioComponent implements OnInit {
  tipos: any[] = [];
  nuevoTipo = { nombre: '' };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarTipos();
  }

  cargarTipos() {
    this.http.get<any[]>('http://localhost:8080/api/tipos-ejercicio')
      .subscribe(data => this.tipos = data);
  }

  crearTipo() {
    if (!this.nuevoTipo.nombre.trim()) {
      alert('El nombre no puede estar vacío.');
      return;
    }

    this.http.post('http://localhost:8080/api/tipos-ejercicio', this.nuevoTipo)
      .subscribe(() => {
        this.cargarTipos();
        this.nuevoTipo = { nombre: '' };
      });
  }

  actualizarTipo(tipo: any) {
    this.http.put(`http://localhost:8080/api/tipos-ejercicio/${tipo.id}`, tipo)
      .subscribe(() => this.cargarTipos());
  }

  eliminarTipo(id: number) {
    if (confirm('¿Seguro que quieres eliminar este tipo de ejercicio?')) {
      this.http.delete(`http://localhost:8080/api/tipos-ejercicio/${id}`)
        .subscribe(() => this.cargarTipos());
    }
  }
}
