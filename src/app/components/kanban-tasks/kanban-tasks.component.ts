import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {ITask, LEVELS} from '../../models/task.interface';
@Component({
  selector: 'app-kanban-tasks',
  templateUrl: './kanban-tasks.component.html',
  styleUrls: ['./kanban-tasks.component.css'],
})

export class KanbanTasksComponent {
  
  tasksIncomplete : ITask[] = [
    {
      title: 'Animaciones Angular',
      description:'Aprender animaciones en Angular',
      completed: false,
      level: LEVELS.INFO
    },
    {
      title: 'Angular CLI',
      description:'Aprender comandos y configuraciones de Angular CLI',
      completed: false,
      level: LEVELS.URGENT
    },
    {
      title: 'Deploy',
      description:'Aprender a desplegar Bundles en Firebase',
      completed: false,
      level: LEVELS.BLOCKING
    },
  ]

  tasksComplete : ITask[] = [
    {
      title: 'Visual Studio Code',
      description:'Aprender a utilizar el editor de código VSC',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Instalar Angular',
      description:'Instalar con npm el Angular CLI de forma global',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Hola Mundo',
      description:'Aprender a crear un proyecto con Angular CLI',
      completed: true,
      level: LEVELS.URGENT
    },
  ]

  
  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.tasksIncomplete.forEach( (task,index) =>{
        if(index === event.currentIndex) {
          task.completed = !task.completed;
        }
         console.log(this.tasksComplete);
         
      })
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
