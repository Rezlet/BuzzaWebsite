import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-voucher-item',
  templateUrl: './voucher-item.component.html',
  styleUrls: ['./voucher-item.component.css'],
})
export class VoucherItemComponent implements OnInit {
  @Input() item: any;
  @Input() fz: any;

  constructor() {}

  ngOnInit(): void {}
}
