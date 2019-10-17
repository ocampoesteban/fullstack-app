import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserBrowserComponent } from './user-browser/user-browser.component';

@NgModule({
  declarations: [
    UserBrowserComponent,
    UserEditComponent
  ],
  imports: [
    UserRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class UserModule { }
