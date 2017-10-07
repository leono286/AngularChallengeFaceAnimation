import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes  } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animateState', [
      transition('* => round', [animate('800ms ease-out', style({ borderRadius: '50%' }))]),
      transition('* => rotate', [animate('2s ease-out', style({ transform: 'rotateX(360deg)' }))]),
      transition('* => hinge', [animate(2000,  keyframes([
        style({ transform: 'rotate(70deg)', transformOrigin: '0 0', offset: 0.3 }),
        style({ transform: 'rotate(-5deg)', transformOrigin: '0 0', offset: 0.6}),
        style({ transform: 'rotate(70deg)', transformOrigin: '0 0', offset: 1 })
        ])
      )]
    ),
      transition('* => crazy', [animate(3000, style({ transform: 'rotate(720deg) scale3d(0.7, 1.5, 0.5)' }))]),
      transition('* => bye', [animate('800ms ease-out', style({ opacity: '0' }))])
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
