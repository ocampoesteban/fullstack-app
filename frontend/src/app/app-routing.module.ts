import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
    //{ path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: '/users', component: LoginComponent },
    //{ path: 'cajero', loadChildren: './user/cajero/cajero.module#CajeroModule'},
    //{ path: '**', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRutingModule {}
