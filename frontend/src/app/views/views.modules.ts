import {NgModule} from '@angular/core';
import { UserService } from '../core/services/user/UserService';
import { ViewsRoutingModule } from './views-rounting.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ViewsRoutingModule,
    HttpClientModule,
  ],
  declarations: [ ],
  exports: [],
  providers: [
      UserService
  ]
})
export class ViewsModule {
}