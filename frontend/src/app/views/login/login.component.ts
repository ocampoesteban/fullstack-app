import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user/User';
import { UserService } from 'src/app/core/services/user/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[];
  User: User;
  
  constructor(private  user:UserService) { }

  ngOnInit() {
  }

  showUsers() {
    this.user.getUsersAPICall()
    .subscribe( (response: any) => 
       this.users = response
    );
  }

  login(username: string) {
    this.user.createUser(username)
    .subscribe( 
      user => {
        console.log(username+' has been posted');
        this.users.push(user);
      },
      error => {
        console.log('shit, error '+ error);
        console.log(error);
      }
    );
  }

  delete(id:string,username:string){
    this.user.delete(id)
    .subscribe(
      (response : User ) => {
        console.log(response.username+' has been deleted');
         this.users = this.users.filter(item => item.username !== username);

      },
      error => {
        console.log('shit, error '+ error);
        console.log(error);
      }
     );
    }
}
