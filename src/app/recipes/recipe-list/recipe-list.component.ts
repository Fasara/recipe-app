import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() afterRecipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
  new Recipe('Test recipe', 'This is a test', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'),
  new Recipe ('Spaghetti Carbonara', 'Some text goes here', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'),
  new Recipe ('Pizza Margherita', 'Some text goes here', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg')
  ];

  onRecipeSelected(recipe: Recipe) { // this type Recipe is already imported in the module so that we can use this type
    this.afterRecipeSelected.emit(recipe);//we can use the event edimetted and pass the recipe as data
  }

  constructor() { }

  ngOnInit() {
  }

}
