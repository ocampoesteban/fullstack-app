import {NgModule} from '@angular/core';
import { EntityContainerComponent } from './entity-container/entity-container.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [ ],
  exports: [
    NotAllowedComponent,
    EntityContainerComponent,
    FooterComponent,
  ],
  declarations: [
    EntityContainerComponent,
    NotAllowedComponent,
    FooterComponent,
  ],
  entryComponents: [ ],
  providers: [ ]
})

export class SharedModule {
}