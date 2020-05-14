import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-spieler',
  templateUrl: './spieler.component.html',
  styleUrls: ['./spieler.component.scss']
})
export class SpielerComponent implements OnInit {

  gewuerfelt = 'false';
  @Input() name = "Kein Name"

  constructor() { }

  ngOnInit(): void {
  }

  wuerfeln() {
    this.gewuerfelt = 'true';
  }

}
