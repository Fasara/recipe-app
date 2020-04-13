import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Cherry Tomatoes', 12),
    new Ingredient('Red onions', 5),
    new Ingredient('Basil', 4)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
