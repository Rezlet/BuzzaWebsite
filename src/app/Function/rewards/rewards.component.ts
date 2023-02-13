import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css'],
  animations: [fadeInOut]
})
export class RewardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
