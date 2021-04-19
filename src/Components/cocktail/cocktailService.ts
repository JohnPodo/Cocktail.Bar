import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail, Bar, Ingredient, HelperIngredient } from './cocktail';

@Injectable({
  providedIn: 'root',
})
export class CockTailService {
  private url: string =
    'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  private searchString: string =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  private searchIngredient: string =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=';

  GetRandomCockTail(): Observable<Bar> {
    let randomCockTail = this.url;
    return this.http.get<Bar>(randomCockTail);
  }

  GetCocktailsByName(searchString: string): Observable<Bar> {
    var str = searchString.toLowerCase();
    str = str.split(' ').join('_');
    var url = this.searchString + str;
    return this.http.get<Bar>(url);
  }

  FillAutoCompleteOptions(list: Array<string>) {
    var names = [
      'Old Fashioned',
      'Negroni',
      'Dry Martini',
      'Margarita',
      'Espresso Martini',
      'Whiskey Sour',
      'Manhattan',
      'Aperol Spritz',
      'Mojito',
      'Bloody Mary',
      'Gimlet',
      'Moscow Mule',
      'Penicillin',
      'Corpse Reviver',
      'Clover Club',
      'Boulevardier',
      'Mai Tai',
      'Sazerac',
      'Paloma',
    ];
    names.forEach((cocktailName) => {
      list.push(cocktailName);
    });
    return list;
  }

  GetIngredients(ingredient: string): Observable<HelperIngredient> {
    var str = ingredient.toLowerCase();
    str = str.split(' ').join('_');
    var url = this.searchIngredient + str;
    return this.http.get<HelperIngredient>(url);
  }
  constructor(private http: HttpClient) {}
}
