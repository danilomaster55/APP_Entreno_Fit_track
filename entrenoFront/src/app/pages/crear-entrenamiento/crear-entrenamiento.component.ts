import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EntrenamientoService } from 'src/app/services/entrenamiento.service';
import { Ejercicio } from 'src/app/models/ejercicio';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';



declare var require: any;
const html2pdf = require('html2pdf.js');



@Component({
  selector: 'app-crear-entrenamiento',
  templateUrl: './crear-entrenamiento.component.html',
  styleUrls: ['./crear-entrenamiento.component.css']
})
export class CrearEntrenamientoComponent implements OnInit, OnChanges {
  @Input() entrenamientoExistente: any | null = null;
  calentamiento: Ejercicio[] = [];
  principal: Ejercicio[] = [];
  calma: Ejercicio[] = [];
  

  mostrarSelector = false;
  seccionActual: 'calentamiento' | 'principal' | 'calma' | null = null;
  nombreEntrenamiento = '';
  intensidadSeleccionada: any = null;
  intensidades: any[] = []; 
  usuarioId: number | null = null;
  descripcionEntrenamiento: string = '';
  hoy = new Date();
  


  

  constructor(private entrenamientoService: EntrenamientoService,
  public  usuarioService: UsuarioService, private snackBar: MatSnackBar) {}
  ngOnChanges(changes: SimpleChanges): void {
  if (changes['entrenamientoExistente'] && this.entrenamientoExistente) {
    this.cargarDesdeEntrenamiento(this.entrenamientoExistente);
  }
}
cargarDesdeEntrenamiento(entrenamiento: any) {
  this.nombreEntrenamiento = entrenamiento.nombre;
  this.descripcionEntrenamiento = entrenamiento.descripcion;
  if (this.intensidades.length > 0) {
    this.intensidadSeleccionada = this.intensidades.find(
      i => i.id === entrenamiento.intensidad.id
    );
  } else {
    // Si aún no están cargadas, espera y asigna luego
    const intensidadId = entrenamiento.intensidad.id;

    const intervalo = setInterval(() => {
      if (this.intensidades.length > 0) {
        this.intensidadSeleccionada = this.intensidades.find(i => i.id === intensidadId);
        clearInterval(intervalo);
      }
    }, 100);
  }

  // Asume que ya te llegan como arrays por sección:
  this.calentamiento = entrenamiento.calentamiento || [];
  this.principal = entrenamiento.principal || [];
  this.calma = entrenamiento.calma || [];

  console.log('Entrenamiento cargado para edición', entrenamiento);
}

  

ngOnInit(): void {
  this.entrenamientoService.obtenerIntensidades().subscribe({
    next: (data) => this.intensidades = data,
    error: (err) => console.error('Error al cargar intensidades', err)
  });

  this.usuarioService.cargarUsuario();

  this.usuarioService.getUsuarioObservable().subscribe(user => {
    if (user?.id) {
      this.usuarioId = user.id;
      console.log('Usuario cargado correctamente:', this.usuarioId);
    } else {
      console.warn('Usuario aún no disponible');
    }
  });
}



  abrirSelector(seccion: 'calentamiento' | 'principal' | 'calma') {
    this.seccionActual = seccion;
    this.mostrarSelector = true;
  }

  cerrarSelector() {
    this.mostrarSelector = false;
    this.seccionActual = null;
  }

  agregarEjercicio(ejercicio: Ejercicio) {
    if (this.seccionActual === 'calentamiento') this.calentamiento.push(ejercicio);
    else if (this.seccionActual === 'principal') this.principal.push(ejercicio);
    else if (this.seccionActual === 'calma') this.calma.push(ejercicio);
    this.cerrarSelector();
  }
  get todosLosEjercicios(): Ejercicio[] {
  return [...this.calentamiento, ...this.principal, ...this.calma];
}

get gruposMusculares(): string[] {
  const nombres = this.todosLosEjercicios
    .map(e => e.grupoMuscular?.nombre)
    .filter((v, i, arr) => v && arr.indexOf(v) === i);
  return nombres;
}

get equipamientos(): string[] {
  const todos = this.todosLosEjercicios.flatMap(e => e.equipamientos || []);
  const unicos = todos.filter(
    (eq, i, arr) => eq && arr.findIndex(e => e.id === eq.id) === i
  );
  return unicos.map(e => e.nombre);
}
get duracionCalculada(): number {
  if (!this.intensidadSeleccionada) return 0;

  const segundosPorEjercicio = 60; // tiempo estimado por ejercicio (puede ajustarse)
  const descanso = this.intensidadSeleccionada.segundosDescanso;

  // Calentamiento y vuelta a la calma → 1 serie
  const totalCalentamiento = this.calentamiento.length * (segundosPorEjercicio + descanso);
  const totalCalma = this.calma.length * (segundosPorEjercicio + descanso);

  // Entrenamiento principal → varias series
  const repeticiones =
    this.intensidadSeleccionada.nombre.toLowerCase() === 'alta' ? 4 : 2;

  const totalPrincipal = this.principal.length * (segundosPorEjercicio + descanso) * repeticiones;

  const totalSegundos = totalCalentamiento + totalPrincipal + totalCalma;

  return Math.ceil(totalSegundos / 60); // minutos redondeados hacia arriba
}
eliminarEjercicio(seccion: string, index: number): void {
  switch (seccion) {
    case 'calentamiento': this.calentamiento.splice(index, 1); break;
    case 'principal': this.principal.splice(index, 1); break;
    case 'calma': this.calma.splice(index, 1); break;
  }
}

 descargarPDF() {
  const element = document.getElementById('resumen-entrenamiento');
  if (!element) {
    console.error('No se encontró el elemento para generar el PDF');
    return;
  }

  const opciones = {
    margin: 0.5,
    filename: `${this.nombreEntrenamiento || 'entrenamiento'}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 , useCORS: true},
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(element).set(opciones).save();
}

guardarEntrenamiento() {
  if (!this.nombreEntrenamiento || !this.intensidadSeleccionada || this.todosLosEjercicios.length === 0) {
    alert('Completa todos los datos antes de guardar.');
    return;
  }

  const entrenamientoPayload = {
    nombre: this.nombreEntrenamiento,
    descripcion: this.descripcionEntrenamiento || 'Entrenamiento personalizado generado por el usuario',
    intensidad: { id: this.intensidadSeleccionada.id },
    esBase: false,
    creadoPor: { id: this.usuarioId }
  };

  const esEdicion = !!this.entrenamientoExistente;

  const accion = esEdicion
    ? this.entrenamientoService.actualizarEntrenamiento(this.entrenamientoExistente.id, entrenamientoPayload)
    : this.entrenamientoService.guardarEntrenamiento(entrenamientoPayload);

  accion.subscribe({
  next: (entrenamientoGuardado) => {
    const entrenamientoId = entrenamientoGuardado.id;

    // Ya no eliminamos relaciones anteriores
    this.guardarRelaciones(entrenamientoId);
  },
  error: (err) => {
      console.error('❌ Error al guardar el entrenamiento', err);
      this.snackBar.open('❌ Error al guardar el entrenamiento', 'Cerrar', {
        duration: 4000,
        panelClass: ['snackbar-error']
      });
    }
  });

}
private guardarRelaciones(entrenamientoId: number) {
  const relaciones: any[] = [];

  this.calentamiento.forEach((ej) => {
    relaciones.push({
      entrenamiento: { id: entrenamientoId },
      ejercicio: { id: ej.id },
      orden: 1,
      valorPersonalizado: ej.valorSugerido || 0,
      descansoPersonalizado: this.intensidadSeleccionada.segundosDescanso
    });
  });

  this.principal.forEach((ej) => {
    relaciones.push({
      entrenamiento: { id: entrenamientoId },
      ejercicio: { id: ej.id },
      orden: 2,
      valorPersonalizado: ej.valorSugerido || 0,
      descansoPersonalizado: this.intensidadSeleccionada.segundosDescanso
    });
  });

  this.calma.forEach((ej) => {
    relaciones.push({
      entrenamiento: { id: entrenamientoId },
      ejercicio: { id: ej.id },
      orden: 3,
      valorPersonalizado: ej.valorSugerido || 0,
      descansoPersonalizado: this.intensidadSeleccionada.segundosDescanso
    });
  });

  relaciones.forEach(relacion => {
    this.entrenamientoService.guardarEntrenamientoEjercicio(relacion).subscribe({
      next: () => console.log('✅ Relación guardada correctamente'),
      error: err => console.error('❌ Error al guardar relación entrenamiento-ejercicio', err)
    });
  });

  this.snackBar.open('✅ Entrenamiento guardado correctamente', 'Cerrar', {
    duration: 3000,
    panelClass: ['snackbar-success']
  });
}


get puedeGuardar(): boolean {
  return (
    this.usuarioId !== null &&
    this.nombreEntrenamiento.trim() !== '' &&
    this.intensidadSeleccionada !== null &&
    this.calentamiento.length > 0 &&
    this.principal.length > 0 &&
    this.calma.length > 0
  );
}

getRutaImagen(ejercicio: Ejercicio): string {
  return `assets/images/${ejercicio.nombre}`;
}


}
