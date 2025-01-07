import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-for',
  imports: [],
  templateUrl: './componente-for.component.html',
  styleUrl: './componente-for.component.css'
})
export class ComponenteForComponent {
  
  tarea: string = '';

  tareas: string[] = [
    'aprender angular',
    'desarrollar una app',
    'aprender typescript'
  ];

  agregarTarea(nuevaTarea: string): void{
    if(nuevaTarea){
      this.tareas.push(nuevaTarea);
    }
  }
}
