import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/Task';
import { ListFilterPipe } from 'src/app/core/pipes/list-filter.pipe';

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

  tasks: Task [] = [
                    { description: 'asdñlk', createdAt: new Date() , deletedAt:new Date(),  name: 'My Day', iconPath: "assets/icon/star-24px.svg" },
                    { description: 'asdñlk', createdAt: new Date() , deletedAt:new Date(),  name: 'Important', iconPath: "assets/icon/star-24px.svg" },
                    { description: 'asdñlk', createdAt: new Date() , deletedAt:new Date(),  name: 'Tasks', iconPath: "assets/icon/star-24px.svg" },
                    { description: 'asdñlk', createdAt: new Date() , deletedAt:new Date(),  name: 'Deleted', iconPath: "assets/icon/star-24px.svg" }
                  ];
  searchedString:string;
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
      ...this.tasks,
      { description: 'asdñlk', createdAt: new Date() , deletedAt:new Date(), iconPath: "assets/icon/star-24px.svg" ,name: 'Go Supermarket' },
      { description: 'asdñlk', createdAt: new Date() , deletedAt:new Date(), iconPath: "assets/icon/star-24px.svg" ,name: 'Important' },
      { description: 'asdñlk', createdAt: new Date() , deletedAt:new Date(), iconPath: "assets/icon/star-24px.svg" ,name: 'Bla bla' }
    ]
  }

  /**
   * Add task
   * @params 
   * @return
   */
  addTask(): void {
    this.tasks.push({ description: 'asdñlk', createdAt: new Date() , deletedAt:new Date(), iconPath:"" ,name: 'New Task' })
  }

  /**
   * Delete task at index
   * @params index
   * @return
   */
  deleteTask(index:number): void {
    if (index || index === 0){
      this.tasks.splice(index,1);
    }
  }
}
