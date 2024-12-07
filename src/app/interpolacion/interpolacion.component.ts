import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
    titulo="Interpolacion";

    usuario = {
      nombre: "Matias",
      edad: 22
    };

    saludar(){
      return `Hola, ${this.usuario.nombre}`;
    }
}
