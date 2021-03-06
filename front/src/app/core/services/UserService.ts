import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpEvent, HttpSentEvent, HttpResponse } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    
    API_URL : string = 'http://localhost:8080/api/';
  
    private handleError(error: any) {
      console.log(error);
      return throwError(error);
    }
    
    constructor(private http:HttpClient) {}
 
    getUsers(): Observable<User[]> {
      let SUFIX_URL : string = 'users/'
      return this.http.get<User[]>(this.API_URL+SUFIX_URL).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );
    }

    createUser(username: string) : Observable<User> {
      if (username) {
        return this.http.post<User>(`${this.API_URL}`, new User(username)).pipe(
          tap(data => console.log(data)),
          catchError(this.handleError)
        );
      }
   }

   deleteUser(id:string) : Observable<{}> {
    const URL = `${this.API_URL}`+'/'+id;
    if(URL) {
      return this.http.delete(URL)
        .pipe(
          catchError(this.handleError)
        );
       }
   }
}