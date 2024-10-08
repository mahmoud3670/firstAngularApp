import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss',
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string = '';
  constructor(private activated: ActivatedRoute) {}
  ngOnInit(): void {
    this.errorMessage = this.activated.snapshot.data['message'];
    this.activated.data.subscribe((data) => {
      this.errorMessage = data['message'];
    });
  }
}
