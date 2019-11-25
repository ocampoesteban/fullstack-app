import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDescriptionComponent } from './task-description/task-description.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TaskEditComponent,
    TaskCreateComponent,
    TasksContainerComponent,
    TasksListComponent,
    TaskDescriptionComponent
  ],
  exports: [
    TaskEditComponent,
    TaskCreateComponent
  ],
  imports: [
    CommonModule, //ngIf, ngFor..
    SharedModule,
    TaskRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class TaskModule { }
