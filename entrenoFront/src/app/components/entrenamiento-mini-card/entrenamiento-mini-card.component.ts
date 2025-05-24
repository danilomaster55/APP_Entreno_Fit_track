import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-entrenamiento-mini-card',
  templateUrl: './entrenamiento-mini-card.component.html',
  styleUrls: ['./entrenamiento-mini-card.component.css']
})
export class EntrenamientoMiniCardComponent {
  @Input() entrenamiento: any;
  @Input() mostrarEliminar: boolean = false;
  @Output() eliminar = new EventEmitter<void>();

  eliminarEntrenamiento(event: Event): void {
    event.stopPropagation(); // Evita que dispare el seleccionarEntrenamiento
    this.eliminar.emit();
  }
}
