import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserBrowserComponent } from './user-browser/user-browser.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AuthGuard } from 'src/app/core/guard/auth.guard';

const routes: Routes = [
  { path:'',component: UserBrowserComponent, canActivate: [AuthGuard] },
  { path:'edit',component: UserEditComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
