import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entrenamiento-detalle',
  templateUrl: './entrenamiento-detalle.component.html',
  styleUrls: ['./entrenamiento-detalle.component.css']
})
export class EntrenamientoDetalleComponent {
  @Input() entrenamiento: any;

  editarEntrenamiento(): void {
    // Lógica para editar el entrenamiento
  }

  eliminarEntrenamiento(): void {
    // Lógica para eliminar el entrenamiento
  }

  imprimirEntrenamiento(): void {
    // Lógica para imprimir el entrenamiento
  }
}
