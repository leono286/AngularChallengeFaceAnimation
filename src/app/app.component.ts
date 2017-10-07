import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animateState', [
      transition('* => round', [animate('800ms ease-out', style({ borderRadius: '50%' }))]),
      transition('* => rotate', [animate('2s ease-out', style({ transform: 'rotateX(360deg)' }))]),
      transition('* => hinge', [animate('2s easeInElastic', style({ transform: 'rotate(90deg)', transformOrigin: '10% 10%' }))]),
      transition('* => crazy', [animate('1s ease-out', style({ transform: 'rotateY(360deg)' }))])
    ])
  ]
})
export class AppComponent {
  title = 'app';

  currentState: string;

  updateState(newState) {
    console.log(newState)
    this.currentState = newState;
  }

}
