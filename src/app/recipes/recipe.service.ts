import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'test description',
      'https://www.zajadam.pl/wp-content/uploads/hamburger-przepis.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 1)
      ]),
    new Recipe(
      'Nalesniki',
      'test description2',
      'http://cdn21.beszamel.smcloud.net/t/thumbs/660/441/1/recipes/photo/crepes-delice-jak-je-zrobic-sprawdzony-przepis.jpg',
      [
        new Ingredient('Milk', 2),
        new Ingredient('Meat', 1)
      ])
  ];


  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
