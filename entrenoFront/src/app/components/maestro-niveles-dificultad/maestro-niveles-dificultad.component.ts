import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maestro-niveles-dificultad',
  templateUrl: './maestro-niveles-dificultad.component.html',
  styleUrls: ['./maestro-niveles-dificultad.component.css']
})
export class MaestroNivelesDificultadComponent implements OnInit {
  niveles: any[] = [];
  nuevoNivel = { nivel: '' };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarNiveles();
  }

  cargarNiveles() {
    this.http.get<any[]>('http://localhost:8080/api/niveles-dificultad')
      .subscribe(data => this.niveles = data);
  }

  crearNivel() {
    if (!this.nuevoNivel.nivel.trim()) {
      alert('El nombre no puede estar vacío.');
      return;
    }

    this.http.post('http://localhost:8080/api/niveles-dificultad', this.nuevoNivel)
      .subscribe(() => {
        this.cargarNiveles();
        this.nuevoNivel = { nivel: '' };
      });
  }

  actualizarNivel(nivel: any) {
    this.http.put(`http://localhost:8080/api/niveles-dificultad/${nivel.id}`, nivel)
      .subscribe(() => this.cargarNiveles());
  }

  eliminarNivel(id: number) {
    if (confirm('¿Seguro que quieres eliminar este nivel de dificultad?')) {
      this.http.delete(`http://localhost:8080/api/niveles-dificultad/${id}`)
        .subscribe(() => this.cargarNiveles());
    }
  }
}

