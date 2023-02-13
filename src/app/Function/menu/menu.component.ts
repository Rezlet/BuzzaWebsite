import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [fadeInOut]

})
export class MenuComponent implements OnInit {

  public foodlist
  public description

  public showOverlay: boolean = true
  rate = 'Đánh giá'

  constructor(private common: CommonService) { 
    this.foodlist = common.foodlist
    this.description = common.description
  }

  ngOnInit(): void {
  }

  
}
