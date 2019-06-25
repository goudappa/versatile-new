import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

export const fadeInOut = (name = 'fadeInOut', duration = 0.1) =>
  trigger(name, [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(`${duration}s ease-in-out`)
    ]),
    transition(':leave', [animate(`${duration}s ease-in-out`, style({ opacity: 0 }))])
  ])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fadeInOut('fadeInOut-1', 0.3),
    fadeInOut('fadeInOut-2', 0.7),
    fadeInOut('fadeInOut-3', 1)
  ]
})
export class HomeComponent implements OnInit {
  show = true;

  isActive: boolean = true;

  constructor() { }

  ngOnInit() {
  }

//   toggle() {
//     this.isActive = !this.isActive;
//  }

}
