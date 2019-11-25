import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/Task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.sass']
})
export class TasksListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadTasksList();
  }

  tasks: Task [] = [];
  isEmpty: boolean = false;

  /**
   * Function use to improve ngfor performance
   * @params index: current index
   *         item: current item
   * @return index
   */
  trackByFunction(index, item) {
    if(!item) return null;
    return index;
  }

  /**
   * Load tasks from DB
   * @params 
   * @return
   */
  loadTasksList(): void {
    this.tasks = [
      { description: 'asdñlk', createdAt: new Date() , deletedAt:new Date(),  name: 'Go Supermarket' },
      { description: 'asdñlk', createdAt: new Date() , deletedAt:new Date(),  name: 'Go Pharmacy' },
      { description: 'asdñlk', createdAt: new Date() , deletedAt:new Date(),  name: 'Important' },
      { description: 'asdñlk', createdAt: new Date() , deletedAt:new Date(),  name: 'Remember' },
      { description: 'asdñlk', createdAt: new Date() , deletedAt:new Date(),  name: 'Bla bla' }
    ]
  }

  /**
   * Add task
   * @params 
   * @return
   */
  addTask(): void {
    this.tasks.push({ description: 'asdñlk', createdAt: new Date() , deletedAt:new Date(),  name: 'New Task' })
  }

  /**
   * Delete task at index
   * @params index
   * @return
   */
  deleteTask(index:number):void {
    if (index || index === 0){
      this.tasks.splice(index,1);
    }
  }
}
