import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  animations: [fadeInOut]

})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
