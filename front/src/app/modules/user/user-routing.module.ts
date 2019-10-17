import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserBrowserComponent } from './user-browser/user-browser.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  { path:'',component: UserBrowserComponent },
  { path:'edit',component: UserEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
