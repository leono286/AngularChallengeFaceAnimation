import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animateState', [
      state('bye', style({ opacity: '0' })),
      transition('* => round', [animate('800ms ease-out', style({ borderRadius: '50%' }))]),
      transition('* => rotate', [animate('2s ease-out', style({ transform: 'rotateX(360deg)' }))]),
      transition('* => hinge', [animate(2000, keyframes([
        style({ transform: 'rotate(70deg)', transformOrigin: '0 0', offset: 0.3 }),
        style({ transform: 'rotate(-5deg)', transformOrigin: '0 0', offset: 0.6 }),
        style({ transform: 'rotate(70deg)', transformOrigin: '0 0', offset: 1 })
      ])
      )]
      ),
      transition('* => crazy', [animate(3000, style({ transform: 'rotate(720deg) scale3d(0.7, 1.5, 0.5)' }))]),
    ]),
    trigger('hideElements', [
      state('bye', style({ opacity: '0' })),
      state('reset', style({ opacity: '1' })),
      transition('* => bye', [query('.element-to-hide',  stagger(550, [
        animate('0.5s', style({ opacity: 0 }))
      ]))]),
      transition('* => reset', [query('.element-to-hide', animate('0.2s 1.8s', style({ opacity: 1 })))])
    ]),
    trigger('resetElement', [
      state('bye', style({opacity: '1'})),
      state('reset', style({opacity: '0'})),
      transition('* => bye', animate('200ms 3s ease-out')),
      transition('bye => reset', [animate('2s ease-out', style({ transform: ' scale3d(0.07,0.07,0.07) rotate(1200deg)', opacity: '0' }))])
      
    ])
  ]
})
export class AppComponent {
  title = 'app';

  currentState: string;
  finalState: string;

  updateState(newState) {
    console.log(newState)
    this.currentState = newState;
  }

  hideElements(){
    console.log('hiding-elements');
    this.finalState = 'bye';
  }

  showElements(){
    console.log('showing-elements');
    this.finalState = 'reset';
  }



}
