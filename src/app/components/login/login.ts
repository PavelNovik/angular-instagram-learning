import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'inst-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit(): void {
    console.log(JSON.stringify(this.loginForm.value));
  }

  protected readonly email = email;
}
