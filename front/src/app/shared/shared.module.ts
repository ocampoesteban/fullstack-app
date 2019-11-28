import { NgModule } from '@angular/core';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';

@NgModule({
  imports: [ ],
  exports: [
    NotAllowedComponent,
    EmptyStateComponent
  ],
  declarations: [
    NotAllowedComponent,
    EmptyStateComponent
  ],
  entryComponents: [ ],
  providers: [ ]
})

export class SharedModule {
}