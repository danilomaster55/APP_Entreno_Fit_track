import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-maestro-equipamientos',
  templateUrl: './maestro-equipamientos.component.html',
  styleUrls: ['./maestro-equipamientos.component.css']
})
export class MaestroEquipamientosComponent implements OnInit {
  equipamientos: any[] = [];
  nuevoEquipamiento = { nombre: '' };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarEquipamientos();
  }

  cargarEquipamientos() {
    this.http.get<any[]>('http://localhost:8080/api/equipamientos')
      .subscribe(data => this.equipamientos = data);
  }

  crearEquipamiento() {
    if (!this.nuevoEquipamiento.nombre.trim()) {
      alert('El nombre no puede estar vacío.');
      return;
    }

    this.http.post('http://localhost:8080/api/equipamientos', this.nuevoEquipamiento)
      .subscribe(() => {
        this.cargarEquipamientos();
        this.nuevoEquipamiento = { nombre: '' };
      });
  }

  actualizarEquipamiento(equipamiento: any) {
    this.http.put(`http://localhost:8080/api/equipamientos/${equipamiento.id}`, equipamiento)
      .subscribe(() => this.cargarEquipamientos());
  }

  eliminarEquipamiento(id: number) {
    if (confirm('¿Seguro que quieres eliminar este equipamiento?')) {
      this.http.delete(`http://localhost:8080/api/equipamientos/${id}`)
        .subscribe(() => this.cargarEquipamientos());
    }
  }
}
