import { fadeInOut } from './../../Services/animation';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [fadeInOut],
})
export class OverlayComponent implements OnInit {
  @Input() show: any;
  @Output() emit = new EventEmitter<any>();

  public description = [
    {
      src: 'assets/images/buzza/img-addcart.png',
      image: 'assets/images/buzza/img-addcart2.png',
      image2: 'assets/images/buzza/img-addcart3.png',
      title: 'Beef BBQ Pizza',
      rank: 4.3,
      prize: '12',
      time: 15,
      desc: 'Đế Dày Kích thước Nhỏ 6”',
      price: '259,000đ',
      oldPrice: '299,000đ',
      quantity: 'Số lượng',
      topping: 'Topping (Tùy chọn)',
      topping1: 'Mật Ong Thêm: 15,000 đ',
      topping2: 'Phô Mai Mozzarella: 30,000 đ',
      topping3: 'Phô Mai Bột: 15,000 đ',
      topping4: 'Sốt Thêm: 15,000 đ',
      topping5: 'Nước Ngọt: 30,000 đ',
      addCart: 'Thêm vào giỏ hàng',
    },
  ];

  rate = 'Đánh giá';

  handleModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.emit.emit(!this.show)
  }
}
