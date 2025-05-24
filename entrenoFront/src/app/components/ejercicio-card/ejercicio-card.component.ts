import { Component, Input } from '@angular/core';
import { Ejercicio } from "src/app/models/ejercicio";

@Component({
  selector: 'app-ejercicio-card',
  templateUrl: './ejercicio-card.component.html',
  styleUrls: ['./ejercicio-card.component.css']
})
export class EjercicioCardComponent {
  @Input() ejercicio!: Ejercicio;

  get rutaImagen(): string {
    return `assets/images/${this.extraerNombreArchivo(this.ejercicio.rutaMultimedia)}`;
  }
  
  private extraerNombreArchivo(ruta: string): string {
    const partes = ruta.split('/');
    return partes[partes.length - 1];
  }
  usarImagenPorDefecto(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/defecto.avif';
  }  

}

