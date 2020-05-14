import {Component, Input, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-wurfel',
  templateUrl: './wurfel.component.html',
  styleUrls: ['./wurfel.component.scss'],
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
export class WurfelComponent implements OnInit {

  @Input() wuerfeln = 'false';

  constructor() { }

  ngOnInit(): void {
  }

}
