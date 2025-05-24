import { Component, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio';
import { EjercicioService } from 'src/app/services/ejercicio.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  ejercicios: Ejercicio[] = [];
  ejerciciosFiltrados: Ejercicio[] = [];
  cargando = true;

  // Filtros seleccionados
  filtroGrupo = '';
  filtroDificultad = '';
  filtroTipo = '';
  busquedaNombre = '';


  // Opciones únicas para filtros
  gruposMusculares: any[] = [];
  nivelesDificultad: any[] = [];
  tiposEjercicio: any[] = [];

  constructor(private ejercicioService: EjercicioService) {}

  ngOnInit(): void {
    this.ejercicioService.obtenerTodos().subscribe({
      next: (data) => {
        this.ejercicios = data;
        this.ejerciciosFiltrados = [...data];
        this.extraerFiltros();
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener ejercicios:', err);
        this.cargando = false;
      }
    });
  }

  // Extrae valores únicos para cada filtro
  extraerFiltros(): void {
    this.gruposMusculares = this.obtenerUnicos(this.ejercicios.map(e => e.grupoMuscular));
    this.nivelesDificultad = this.obtenerUnicos(this.ejercicios.map(e => e.nivelDificultad));
    this.tiposEjercicio = this.obtenerUnicos(this.ejercicios.map(e => e.tipoEjercicio));
  }

  obtenerUnicos(arr: any[]): any[] {
    return arr.filter(
      (valor, index, self) =>
        index === self.findIndex(v => v.id === valor.id)
    );
  }

  aplicarFiltros(): void {
    this.ejerciciosFiltrados = this.ejercicios.filter(e => {
      const coincideGrupo = !this.filtroGrupo || e.grupoMuscular?.nombre === this.filtroGrupo;
      const coincideDificultad = !this.filtroDificultad || e.nivelDificultad?.nivel === this.filtroDificultad;
      const coincideTipo = !this.filtroTipo || e.tipoEjercicio?.nombre === this.filtroTipo;
      const coincideNombre = !this.busquedaNombre || e.nombre.toLowerCase().includes(this.busquedaNombre.toLowerCase());
      return coincideGrupo && coincideDificultad && coincideTipo && coincideNombre;
    });
  }
  
}
