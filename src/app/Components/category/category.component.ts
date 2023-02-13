import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public category = ['Pizza', 'Risotto', 'Salad', 'Soup', 'Pasta', 'Sidedishes', 'Steak', 'Tea', 'Juice', 'Ade']

  constructor() { }

  ngOnInit(): void {
  }

}
