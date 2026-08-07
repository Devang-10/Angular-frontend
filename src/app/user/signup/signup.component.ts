import { Component } from '@angular/core';

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

  isSignupValid(): boolean {
    return (
      this.name.trim() !== '' &&
      this.email.trim() !== '' &&
      this.password.trim() !== '' &&
      this.role.trim() !== ''
    );
  }
  signup(): void {
    const signupRequest = {
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role,
    };
    console.log('SignUp Request: ', signupRequest);
  }
  passwordStrength(): string {
    if (this.password.length == 0) return '';
    if (this.password.length < 4) return 'weak';
    if (this.password.length < 8) return 'medium';
    return 'strong';
  }
}
