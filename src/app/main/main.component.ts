import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit, OnDestroy {
  private observableSubscriber: Subscription;

  ngOnInit(): void {
    // this.observableSubscriber = interval(1000).subscribe((counter) => {
    //   console.log(counter);
    // });
  }

  ngOnDestroy(): void {
    //this.observableSubscriber.unsubscribe();
  }
}
