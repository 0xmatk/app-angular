import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  // @Input() mensaje!: string; //! sirve para indicar a typescript que la variable se va a iniciar posteriormente

  // @Output() notificarPadre = new EventEmitter<string>();

  // enviarMensaje(){
  //   // emitir el evento con un mensaje

  //   // this.notificarPadre.emit('Mensaje desde el componente hijo al padre');
    
    
  // }

  mensaje: string = "Mensaje desde el componente Hijo";

  cambiarMensaje(nuevoMensaje : string){
    this.mensaje = nuevoMensaje;
  }
  
}
