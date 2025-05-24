import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maestro-grupos-musculares',
  templateUrl: './maestro-grupos-musculares.component.html',
  styleUrls: ['./maestro-grupos-musculares.component.css']
})
export class MaestroGruposMuscularesComponent implements OnInit {
  grupos: any[] = [];
  nuevoGrupo = { nombre: '' };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarGrupos();
  }

  cargarGrupos() {
    this.http.get<any[]>('http://localhost:8080/api/grupos-musculares')
      .subscribe(data => this.grupos = data);
  }

  crearGrupo() {
    if (!this.nuevoGrupo.nombre) {
      alert('El nombre no puede estar vacío.');
      return;
    }

    this.http.post('http://localhost:8080/api/grupos-musculares', this.nuevoGrupo)
      .subscribe(() => {
        this.cargarGrupos();
        this.nuevoGrupo = { nombre: '' };
      });
  }

  actualizarGrupo(grupo: any) {
    this.http.put(`http://localhost:8080/api/grupos-musculares/${grupo.id}`, grupo)
      .subscribe(() => this.cargarGrupos());
  }

  eliminarGrupo(id: number) {
    if (confirm('¿Seguro que quieres eliminar este grupo muscular?')) {
      this.http.delete(`http://localhost:8080/api/grupos-musculares/${id}`)
        .subscribe(() => this.cargarGrupos());
    }
  }
}
