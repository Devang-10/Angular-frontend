import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';

  isFormValid() {
    if (this.email.trim() !== '' && this.password.trim() !== '') return true;
    return false;
  }

  login() {
    const loginRequest = {
      email: this.email,
      password: this.password,
    };
    console.log('Login Request: ', loginRequest);
  }

  forgotPassword() {
    console.log('Send Password Reset Link to: ', this.email);
  }
}
