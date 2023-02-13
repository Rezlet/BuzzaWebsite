import { fadeInOut } from './../../Services/animation';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  animations: [fadeInOut]

})
export class OrderComponent implements OnInit {

  // public logos = [
  //   { src: 'assets/images/namsan/buzza-circle.png', value: 'buzza'},
  //   { src: 'assets/images/namsan/sushi-circle.png', value: 'sushi'},
  //   { src: 'assets/images/namsan/grill-circle.png', value: 'grill'},
  // ]

  // items: any;

  public buzza: boolean = false
  public sushi: boolean = false
  public grill: boolean = false

  // public foodlist = [
  //   {
  //     src: 'assets/images/namsan/food-item1.png',
  //     logo: 'assets/images/namsan/logo-food-item.png',
  //     img: 'assets/images/namsan/heart-transparent.png',
  //     brand: 'Sushi',
  //     title: 'Sea Food Pizza',
  //     price: '495.000đ',
  //   },
  //   {
  //     src: 'assets/images/namsan/food-item1.png',
  //     logo: 'assets/images/namsan/logo-food-item.png',
  //     img: 'assets/images/namsan/heart-transparent.png',
  //     brand: 'Grill',
  //     title: 'Fred Shrimp Pizza',
  //     price: '249 .000đ',
  //   },
  //   {
  //     src: 'assets/images/namsan/food-item1.png',
  //     logo: 'assets/images/namsan/logo-food-item.png',
  //     img: 'assets/images/namsan/heart-transparent.png',
  //     brand: 'Buzza Pizza',
  //     title: 'Classic Pizza',
  //     price: '495.000đ',
  //     // category: 
  //   },
  //   {
  //     src: 'assets/images/namsan/food-item1.png',
  //     logo: 'assets/images/namsan/logo-food-item.png',
  //     img: 'assets/images/namsan/heart-transparent.png',
  //     brand: 'Buzza Pizza',
  //     title: 'Classic Pizza',
  //     price: '495.000đ',
  //   },
  //   {
  //     src: 'assets/images/namsan/food-item1.png',
  //     logo: 'assets/images/namsan/logo-food-item.png',
  //     img: 'assets/images/namsan/heart-transparent.png',
  //     brand: 'Buzza Pizza',
  //     title: 'Classic Pizza',
  //     price: '495.000đ',
  //   },
  //   {
  //     src: 'assets/images/namsan/food-item1.png',
  //     logo: 'assets/images/namsan/logo-food-item.png',
  //     img: 'assets/images/namsan/heart-transparent.png',
  //     brand: 'Buzza Pizza',
  //     title: 'Classic Pizza',
  //     price: '495.000đ',
  //   },
  //   {
  //     src: 'assets/images/namsan/food-item1.png',
  //     logo: 'assets/images/namsan/logo-food-item.png',
  //     img: 'assets/images/namsan/heart-transparent.png',
  //     brand: 'Buzza Pizza',
  //     title: 'Classic Pizza',
  //     price: '495.000đ',
  //   },
  //   {
  //     src: 'assets/images/namsan/food-item1.png',
  //     logo: 'assets/images/namsan/logo-food-item.png',
  //     img: 'assets/images/namsan/heart-transparent.png',
  //     brand: 'Buzza Pizza',
  //     title: 'Classic Pizza',
  //     price: '495.000đ',
  //   },
  //   {
  //     src: 'assets/images/namsan/food-item1.png',
  //     logo: 'assets/images/namsan/logo-food-item.png',
  //     img: 'assets/images/namsan/heart-transparent.png',
  //     brand: 'Buzza Pizza',
  //     title: 'Classic Pizza',
  //     price: '495.000đ',
  //   },
  //   {
  //     src: 'assets/images/namsan/food-item1.png',
  //     logo: 'assets/images/namsan/logo-food-item.png',
  //     img: 'assets/images/namsan/heart-transparent.png',
  //     brand: 'Buzza Pizza',
  //     title: 'Classic Pizza',
  //     price: '495.000đ',
  //   },
  //   {
  //     src: 'assets/images/namsan/food-item1.png',
  //     logo: 'assets/images/namsan/logo-food-item.png',
  //     img: 'assets/images/namsan/heart-transparent.png',
  //     brand: 'Buzza Pizza',
  //     title: 'Classic Pizza',
  //     price: '495.000đ',
  //   },
  //   {
  //     src: 'assets/images/namsan/food-item1.png',
  //     logo: 'assets/images/namsan/logo-food-item.png',
  //     img: 'assets/images/namsan/heart-transparent.png',
  //     brand: 'Buzza Pizza',
  //     title: 'Classic Pizza',
  //     price: '495.000đ',
  //   },
  //   {
  //     src: 'assets/images/namsan/food-item1.png',
  //     logo: 'assets/images/namsan/logo-food-item.png',
  //     img: 'assets/images/namsan/heart-transparent.png',
  //     brand: 'Buzza Pizza',
  //     title: 'Classic Pizza',
  //     price: '495.000đ',
  //   },
  // ]

  public foodlist

  public buzzaList = [{}]
  public sushiList = [{}]
  public grillList = [{}]

  constructor( private common: CommonService ) { 
    this.foodlist = common.foodlist
  }

  ngOnInit(): void {
  }

  showBuzza() {
    this.buzza = true
    this.sushi = false
    this.grill = false

    this.buzzaList = this.foodlist.filter(el => el.brand === 'Buzza Pizza')
    console.log(this.buzzaList)
    return this.buzzaList
  }

  showSushi() {
    this.buzza = false
    this.sushi = true
    this.grill = false

    this.sushiList = this.foodlist.filter(el => el.brand === 'Sushi')
    console.log(this.sushiList)
    return this.sushiList
  }

  showGrill() {
    this.buzza = false
    this.sushi = false
    this.grill = true

    this.grillList = this.foodlist.filter(el => el.brand === 'Grill')
    console.log(this.grillList)
    return this.grillList
  }

}
