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

  ngOnInit(): void {
    this.GetFourRandomCocktails();
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
}
