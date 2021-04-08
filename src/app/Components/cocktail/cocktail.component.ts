import { Component, OnInit } from '@angular/core';
import { Cocktail, Bar } from './cocktail';
import { CockTailService } from './cocktailService';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css'],
})
export class CocktailComponent implements OnInit {
  constructor(private service: CockTailService) {}

  cocktailArray!: Bar;
  listOfCocktails: Cocktail[] = [];
  descriptionText: string = 'Our Four Random Suggestions';
  searchText!: string;
  autoCompleteNames: Array<string> = [];

  searchThis() {
    if (this.searchText) {
      this.descriptionText = `Search Result For ${this.searchText}`;
      this.service.GetCocktailsByName(this.searchText).subscribe((data) => {
        this.cocktailArray = data;
        if (this.cocktailArray && this.cocktailArray.drinks) {
          this.PopulateHtmlWithSearchedCocktails();
        }
      });
    } else {
      this.descriptionText = 'Our Four Random Suggestions';
      this.listOfCocktails = [];
      this.GetFourRandomCocktails();
    }
  }

  ngOnInit(): void {
    this.GetFourRandomCocktails();
    this.autoCompleteNames = this.service.FillAutoCompleteOptions(
      this.autoCompleteNames
    );
  }

  //Populate Landing Page With Four Random Cocktails
  GetRandomCockTail() {
    this.service.GetRandomCockTail().subscribe((data) => {
      this.cocktailArray = data;
      this.AddCocktailToList(this.cocktailArray.drinks[0]);
    });
  }

  AddCocktailToList(x: Cocktail) {
    this.listOfCocktails.push(x);
  }

  GetFourRandomCocktails() {
    for (let i = 0; i < 4; i++) {
      this.GetRandomCockTail();
    }
  }
  //

  PopulateHtmlWithSearchedCocktails() {
    var count = 0;
    this.listOfCocktails = [];
    this.cocktailArray.drinks.forEach((cocktail) => {
      if (count < 4) {
        this.AddCocktailToList(cocktail);
        count++;
      }
    });
  }
}
