import { CommonService } from './../../Services/common.service';
import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-sale',
  templateUrl: './flash-sale.component.html',
  styleUrls: ['./flash-sale.component.css'],
  animations: [fadeInOut]
})
export class FlashSaleComponent implements OnInit {
  foodlist: any
  description: any
  constructor(private common: CommonService) { 
    this.foodlist = common.foodlist
    this.description = common.description
  }

  ngOnInit(): void {
  }

}
