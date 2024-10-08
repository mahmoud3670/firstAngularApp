import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-individul-user',
  templateUrl: './individul-user.component.html',
  styleUrl: './individul-user.component.scss',
})
export class IndividulUserComponent implements OnInit {
  user: { id: number; name: string };
  constructor(private activated: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = {
      id: this.activated.snapshot.params['id'],
      name: this.activated.snapshot.params['name'],
    };

    this.activated.params.subscribe((params: Params) => {
      this.user.id = +params['id'];
      this.user.name = params['name'];
    });
  }
}
