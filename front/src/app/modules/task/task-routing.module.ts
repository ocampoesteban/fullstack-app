import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';

const routes: Routes = [
  { path: '', 
    component: TasksContainerComponent 
  },
  { path: 'edit/:taskID', 
    component: TaskEditComponent 
  },
  { path: 'create', 
    component: TaskCreateComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class TaskRoutingModule { }
