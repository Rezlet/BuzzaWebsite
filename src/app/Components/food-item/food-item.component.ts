import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css'],
})
export class FoodItemComponent implements OnInit {
  @Input() item: any = [];
  isShowOverlay: any = false;
  constructor() {}

  showOverlay() {
    this.isShowOverlay = !this.isShowOverlay
  }
  ngOnInit(): void {
    console.log(this.item)
  }
  catchEmit(value: any) {
    this.isShowOverlay = value
  }
}
