import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/authorization/login/login.component';
import { SignUpComponent } from './modules/authorization/sign-up/sign-up.component';

const routes: Routes = [
  { path:'login',component: LoginComponent },
  { path:'',component: LoginComponent },
  { path:'sign-up',component: SignUpComponent },
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
