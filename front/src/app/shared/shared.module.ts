import {NgModule} from '@angular/core';
import { EntityContainerComponent } from './entity-container/entity-container.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [ ],
  exports: [
    NotAllowedComponent,
    EntityContainerComponent,
    FooterComponent,
    HeaderComponent,
  ],
  declarations: [
    EntityContainerComponent,
    NotAllowedComponent,
    FooterComponent,
    HeaderComponent,
  ],
  entryComponents: [ ],
  providers: [ ]
})

export class SharedModule {
}