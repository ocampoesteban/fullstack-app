import { Component } from '@angular/core';
import { AuthorizationService } from './core/services/AuthorizationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'front';

  constructor(
    private authorizationService: AuthorizationService,
  ) { }

  isUserLogged(){
    return this.authorizationService.isLogged;
  }
}
