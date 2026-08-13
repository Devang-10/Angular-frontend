import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.email = this.authService.getSignupEmail();
  }

  isFormValid() {
    if (this.email.trim() !== '' && this.password.trim() !== '') return true;
    return false;
  }

  login() {
    this.authService.login();
    alert('login successful');
    this.router.navigate(['/home']);
  }

  forgotPassword() {}
}
