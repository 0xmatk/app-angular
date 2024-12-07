import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  imports: [],
  template: `
   <h1>{{tituloComponenteInline}}</h1>
    <p>
     Fuente mas grande
    </p>
  `,
  styles: `
    h1 {
      color: red;
    }
    p {
      font-size: 30px;
    }
  `
})
export class ComponenteEnLineaComponent {
  tituloComponenteInline = 'Hola desde componente en linea';
} 
