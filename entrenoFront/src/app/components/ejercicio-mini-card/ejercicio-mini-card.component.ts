import { Component, Input } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio';

@Component({
  selector: 'app-ejercicio-mini-card',
  templateUrl: './ejercicio-mini-card.component.html',
  styleUrls: ['./ejercicio-mini-card.component.css']
})
export class EjercicioMiniCardComponent {
  @Input() ejercicio!: Ejercicio;

  get rutaImagen(): string {
    const partes = this.ejercicio.rutaMultimedia?.split('/') || [];
    return `assets/images/${partes[partes.length - 1]}`;
  }

  usarImagenPorDefecto(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/placeholder.jpg';
  }
}

