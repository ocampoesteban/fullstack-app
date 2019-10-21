import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from '../services/AuthorizationService';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthorizationService
    ){ }

    canActivate() {
        const isLogged = this.authenticationService.isLogged;

        if (isLogged) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}