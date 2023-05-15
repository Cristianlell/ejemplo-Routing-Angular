import { Component, Input, OnInit } from '@angular/core';
import { ITask, LEVELS } from 'src/app/models/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  
@Input() task : ITask = {
  title:'Título por defecto',
  description:'Descripción por defecto',
  completed:false,
  level:LEVELS.INFO
}

  constructor() {
    
  }
  
  ngOnInit(): void {
    
  }
}
