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
  GetRandomCockTail() {
    this.service
      .GetRandomCockTail()
      .subscribe((data) => (this.cocktailArray = data));
  }

  ngOnInit(): void {
    this.GetRandomCockTail();
  }
}
