import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router, private auth: AuthService) {}
  onLoadServers() {
    this.router.navigate(['/servers']);
  }
  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit']);
  }
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
