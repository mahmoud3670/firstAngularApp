import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users = [
    { id: 1, name: 'mahmoud' },
    { id: 2, name: 'ali' },
    { id: 3, name: 'mohsen' },
    { id: 4, name: 'maged' },
    { id: 5, name: 'omar' },
    { id: 6, name: 'amr' },
    { id: 7, name: 'atef' },
  ];
}
