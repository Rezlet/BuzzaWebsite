import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-menu',
  templateUrl: './intro-menu.component.html',
  styleUrls: ['./intro-menu.component.css']
})
export class IntroMenuComponent implements OnInit {

  public title = 'Hôm nay ăn gì ?';
  public link = 'Xem thực đơn';

  constructor() { }

  ngOnInit(): void {
  }

}
