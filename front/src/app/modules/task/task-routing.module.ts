import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';
import { TaskDescriptionComponent } from './task-description/task-description.component';
import { EmptyStateComponent } from 'src/app/shared/empty-state/empty-state.component';

const routes: Routes = [
  {
    path: '',
    component: TasksContainerComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: EmptyStateComponent, data: { breadcrumb: 'Dashboard' } },
      { path: ':taskId/detail', component: TaskDescriptionComponent, data: { breadcrumb: '' } },
      { path: ':taskId/edit', component: TaskEditComponent, data: { breadcrumb: '' } },
      { path: 'new', component: TaskCreateComponent, data: { breadcrumb: 'new' } },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
