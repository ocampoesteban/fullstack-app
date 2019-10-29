import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/authorization/login/login.component';
import { SignUpComponent } from './modules/authorization/sign-up/sign-up.component';

const routes: Routes = [
  { path:'login',component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // redirect to
  { path:'',component: LoginComponent },
  { path:'sign-up',component: SignUpComponent },
  { 
    path: 'tasks',
    loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule)
  },
  { 
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
