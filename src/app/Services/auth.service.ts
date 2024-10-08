import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggdIn = false;
  constructor() {}
  login() {
    this.loggdIn = true;
  }
  logout() {
    this.loggdIn = false;
  }
  isAuthentcated() {
    return this.loggdIn;
  }
}
