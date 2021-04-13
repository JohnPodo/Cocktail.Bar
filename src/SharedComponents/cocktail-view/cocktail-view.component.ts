import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Cocktail } from '../../Components/cocktail/cocktail';

@Component({
  selector: 'app-cocktail-view',
  templateUrl: './cocktail-view.component.html',
  styleUrls: ['./cocktail-view.component.css'],
})
export class CocktailViewComponent implements OnInit {
  constructor() {}

  ngOnChanges(): void {
    console.log('Cocktail');
  }

  @Input() item!: Cocktail;

  ngOnInit(): void {}
}
