import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required,Validators.minLength(6)],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.signUpForm.controls; }

  errorMessage = {
    message: '',
    IsDisplayed: false
  }

  signUpForm: FormGroup;
  submitted = false;

  login(): void {
    this.router.navigate(['/login'])
  }

  registerUser(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signUpForm.invalid) { return }

    alert('user registered')
  }
}
