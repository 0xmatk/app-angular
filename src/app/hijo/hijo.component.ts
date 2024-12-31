import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  private titulo = "Titulo componente hijo";

  // Getter de typescript
  get mostrarTitulo(){
    return this.titulo; 
  }

  getTitulo(){
    return this.titulo;
  }
}
