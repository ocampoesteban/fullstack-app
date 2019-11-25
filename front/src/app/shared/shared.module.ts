import { NgModule } from '@angular/core';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { FooterComponent } from './footer/footer.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [ ],
  exports: [
    NotAllowedComponent,
    FooterComponent,
    EmptyStateComponent
  ],
  declarations: [
    NotAllowedComponent,
    FooterComponent,
    EmptyStateComponent
  ],
  entryComponents: [ ],
  providers: [ ]
})

export class SharedModule {
}