import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private signupEmail = '';

  setSignupEmail(email: string) {
    this.signupEmail = email;
  }

  getSignupEmail(): string {
    return this.signupEmail;
  }

  login() {
    sessionStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    sessionStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }
}
