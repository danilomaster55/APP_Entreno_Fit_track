import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio';
import { EjercicioService } from 'src/app/services/ejercicio.service';

@Component({
  selector: 'app-ejercicios-selector',
  templateUrl: './ejercicios-selector.component.html',
  styleUrls: ['./ejercicios-selector.component.css']
})
export class EjerciciosSelectorComponent implements OnInit {
  @Output() ejercicioSeleccionado = new EventEmitter<Ejercicio>();

  ejercicios: Ejercicio[] = [];
  ejerciciosFiltrados: Ejercicio[] = [];

  filtroGrupo = '';
  filtroDificultad = '';
  filtroTipo = '';
  busquedaNombre = '';

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
      },
      error: (err) => console.error('Error al cargar ejercicios:', err)
    });
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

  seleccionarEjercicio(e: Ejercicio): void {
    this.ejercicioSeleccionado.emit(e);
  }

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
}
