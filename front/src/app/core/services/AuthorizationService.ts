import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpEvent, HttpSentEvent, HttpResponse } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public currentUser: String;
  
  constructor(
    private http:HttpClient
  ) {}
  
  public get isLogged() {
    return localStorage.authdata;
  }

  API_URL : string = 'http://localhost:8080/api/login/';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  login( data: { email: string, password: string }): Observable<User> {
    if (data) {
      return this.http.post<User>(`${this.API_URL}`, {
          email: data.email,
          password: data.password
        },this.httpOptions).pipe(
        tap((response: any) => {
          localStorage.setItem('authdata', JSON.stringify(response.token));
        }),
        catchError(this.handleError)
      );
    }
  }

  logout(){
    localStorage.removeItem('authdata');
  }

}