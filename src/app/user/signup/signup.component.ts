import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  role: string = '';
  isPasswordFocused: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  isSignupValid(): boolean {
    return (
      this.name.trim() !== '' &&
      this.email.trim() !== '' &&
      this.password.trim() !== '' &&
      this.role.trim() !== ''
    );
  }
  signup(): void {
    this.authService.setSignupEmail(this.email);
    alert('Signup successful');
    this.router.navigate(['/login']);
  }
  passwordStrength(): string {
    if (this.password.length == 0) return '';
    if (this.password.length < 4) return 'weak';
    if (this.password.length < 8) return 'medium';
    return 'strong';
  }
}
