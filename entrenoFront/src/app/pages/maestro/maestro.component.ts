import { Component } from '@angular/core';

@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.css']
})
export class MaestroComponent {
  opcionSeleccionada: string = '';

  seleccionar(opcion: string) {
    this.opcionSeleccionada = opcion;
  }
}
