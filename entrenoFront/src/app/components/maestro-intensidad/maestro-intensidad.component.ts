import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maestro-intensidad',
  templateUrl: './maestro-intensidad.component.html',
  styleUrls: ['./maestro-intensidad.component.css']
})
export class MaestroIntensidadComponent implements OnInit {
  intensidades: any[] = [];
  nuevaIntensidad = { nombre: '', segundosDescanso: 0 };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarIntensidades();
  }

  cargarIntensidades() {
    this.http.get<any[]>('http://localhost:8080/api/intensidades')
      .subscribe(data => this.intensidades = data);
  }

  crearIntensidad() {
    if (!this.nuevaIntensidad.nombre || this.nuevaIntensidad.segundosDescanso <= 0) {
      alert('Rellena todos los campos correctamente.');
      return;
    }

    this.http.post('http://localhost:8080/api/intensidades', this.nuevaIntensidad)
      .subscribe(() => {
        this.cargarIntensidades();
        this.nuevaIntensidad = { nombre: '', segundosDescanso: 0 };
      });
  }

  actualizarIntensidad(intensidad: any) {
    this.http.put(`http://localhost:8080/api/intensidades/${intensidad.id}`, intensidad)
      .subscribe(() => this.cargarIntensidades());
  }

  eliminarIntensidad(id: number) {
    if (confirm('¿Seguro que quieres eliminar esta intensidad?')) {
      this.http.delete(`http://localhost:8080/api/intensidades/${id}`)
        .subscribe(() => this.cargarIntensidades());
    }
  }
}
