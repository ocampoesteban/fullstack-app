import { NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import {UserService} from './services/UserService';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptor/error.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
  ],
  entryComponents: [
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      AuthGuard,
      UserService
    ]
})

export class CoreModule { }