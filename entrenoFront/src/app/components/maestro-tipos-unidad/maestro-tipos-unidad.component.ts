import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maestro-tipos-unidad',
  templateUrl: './maestro-tipos-unidad.component.html',
  styleUrls: ['./maestro-tipos-unidad.component.css']
})
export class MaestroTiposUnidadComponent implements OnInit {
  tipos: any[] = [];
  nuevoTipo = { nombre: '' };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarTipos();
  }

  cargarTipos() {
    this.http.get<any[]>('http://localhost:8080/api/tipos-unidad')
      .subscribe(data => this.tipos = data);
  }

  crearTipo() {
    if (!this.nuevoTipo.nombre.trim()) {
      alert('El nombre no puede estar vacío.');
      return;
    }

    this.http.post('http://localhost:8080/api/tipos-unidad', this.nuevoTipo)
      .subscribe(() => {
        this.cargarTipos();
        this.nuevoTipo = { nombre: '' };
      });
  }

  actualizarTipo(tipo: any) {
    this.http.put(`http://localhost:8080/api/tipos-unidad/${tipo.id}`, tipo)
      .subscribe(() => this.cargarTipos());
  }

  eliminarTipo(id: number) {
    if (confirm('¿Seguro que quieres eliminar este tipo de unidad?')) {
      this.http.delete(`http://localhost:8080/api/tipos-unidad/${id}`)
        .subscribe(() => this.cargarTipos());
    }
  }
}
