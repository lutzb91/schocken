import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-spieler',
  templateUrl: './spieler.component.html',
  styleUrls: ['./spieler.component.scss']
})
export class SpielerComponent implements OnInit {

  gewuerfelt = 'false';
  @Input() name = "Kein Name"
  zahlen = [0, 0, 0];

  constructor() { }

  ngOnInit(): void {
  }

  wuerfeln() {
    this.gewuerfelt = 'true';
  }

  wuerfelnDone() {
    console.log('Wuerfeln done');
    this.zahlen[0] = 1;
    this.zahlen[1] = 1;
    this.zahlen[2] = 1;
  }

}
