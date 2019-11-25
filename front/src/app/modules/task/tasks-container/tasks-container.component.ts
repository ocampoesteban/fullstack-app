import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/Task';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.sass']
})
export class TasksContainerComponent implements OnInit {
  constructor() { 
  }

  isTaskTouched: boolean= true;
  isMobile:boolean = true;
  tasks: Task [] = [];

  getIsMobile(): boolean {
    const WIDTH = document.documentElement.clientWidth;
    const XS_BREAKPOINT = 425;
    console.log(WIDTH);
    if (WIDTH > XS_BREAKPOINT) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.isMobile = this.getIsMobile();
    
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }

}
