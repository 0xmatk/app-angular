import { Component } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  mensaje: string = '';

  recibirNotificacion(mensajeHijo: string) {
    this.mensaje = mensajeHijo;
  }
  // mensajePadre: string = 'Mensaje desde el componente Padre';
}
