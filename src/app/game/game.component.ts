import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gewuerfelt = 'false';

  constructor() { }

  ngOnInit(): void {
  }

  wuerfeln() {
    this.gewuerfelt = 'true';
  }
}
