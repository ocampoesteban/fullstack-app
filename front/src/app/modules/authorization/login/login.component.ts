import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/core/services/AuthorizationService';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
    private fb: FormBuilder
  ) { }

  errorMessage = {
    message: '',
    IsDisplayed: false
  }

  loginForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  signUp(): void {
    this.router.navigate(['/sign-up'])
  }

  login(e): void {
    e.preventDefault();

    this.submitted = true;


    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }


    if (this.loginForm.touched) {
      this.authorizationService.login({email: this.loginForm.value.email,password: this.loginForm.value.password})
      .subscribe(
        () => this.router.navigateByUrl('/user'),
        (error ) => {
          this.errorMessage.IsDisplayed = true,
          this.errorMessage.message = error.error.message
      });
    }
  }
}