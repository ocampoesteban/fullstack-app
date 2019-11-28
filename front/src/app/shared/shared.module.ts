import { NgModule } from '@angular/core';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [ ],
  exports: [
    NotAllowedComponent,
    HeaderComponent,
    EmptyStateComponent
  ],
  declarations: [
    NotAllowedComponent,
    EmptyStateComponent,
    HeaderComponent
  ],
  entryComponents: [ ],
  providers: [ ]
})

export class SharedModule {
}