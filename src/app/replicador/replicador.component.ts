import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  imports: [],
  templateUrl: './replicador.component.html',
  styleUrl: './replicador.component.css'
})
export class ReplicadorComponent {
  texto: string = '';

  actualizarTexto(evento: Event){
    const elementoTexto = evento.target as HTMLInputElement;
    this.texto = elementoTexto.value;
  }
}
