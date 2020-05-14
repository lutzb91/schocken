import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, AnimationEvent, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-wuerfelbecher',
  templateUrl: './wuerfelbecher.component.html',
  styleUrls: ['./wuerfelbecher.component.scss'],
  animations: [
    trigger('wuerfeln', [
      state('true', style({transform: 'rotate(180deg)'})),
      state('false', style({transform: 'none'})),
      transition('false => true', [
        animate('2s', keyframes([
          style({transform: "translate(5px, 0px)", offset: 0}),
          style({transform: "translate(-10px, 0px)", offset: 0.05}),
          style({transform: "translate(10px, 0px)", offset: 0.1}),
          style({transform: "translate(-10px, 0px)", offset: 0.15}),
          style({transform: "translate(10px, 0px)", offset: 0.2}),
          style({transform: "translate(-10px, 0px)", offset: 0.25}),
          style({transform: "translate(10px, 0px)", offset: 0.3}),
          style({transform: "translate(-10px, 0px)", offset: 0.35}),
          style({transform: "translate(5px, 0px)", offset: 0.4}),
          style({transform: "rotate(180deg)", offset: 1}),
        ]))
      ]),
      transition('true => false', [
        animate('1s', keyframes([
          style({transform: 'none'})
        ]))
      ])
    ])
  ]
})
export class WuerfelbecherComponent implements OnInit {

  @Input() wuerfeln = 'false';
  @Output() gewuerfelt : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  wuerfelnDoneEvent(event: AnimationEvent) {
    console.log('wuerfelnDoneEvent');
    if(event.toState == 'true') {
      this.gewuerfelt.emit(null);
    }
  }
}
