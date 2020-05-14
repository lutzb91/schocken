import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wuerfel',
  templateUrl: './wuerfel.component.html',
  styleUrls: ['./wuerfel.component.scss']
})
export class WuerfelComponent implements OnInit {

  @Input() zahl = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
