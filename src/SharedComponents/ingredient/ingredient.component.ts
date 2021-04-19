import { Component, OnInit, Input, Inject, OnChanges } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { CockTailService } from '../../Components/cocktail/cocktailService';
import {
  Ingredient,
  HelperIngredient,
} from '../../Components/cocktail/cocktail';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
})
export class IngredientComponent implements OnInit {
  constructor(public dialog: MatDialog, private service: CockTailService) {}

  dialogConfig = new MatDialogConfig();
  openDialog() {
    this.dialogConfig.data = {
      ingredient: this.ingredientObject,
    };
    this.dialog.open(DialogElementsExampleDialog, this.dialogConfig);
  }

  @Input() ingredient!: string;

  ngOnInit(): void {
    this.GetIngredient(this.ingredient);
  }
  ingredientObject: HelperIngredient = {
    ingredients: [],
  };
  GetIngredient(ingredient: string) {
    this.service.GetIngredients(ingredient).subscribe((data) => {
      this.ingredientObject = data;
    });
  }
}

@Component({
  selector: 'dialogBody',
  templateUrl: 'dialogBody.html',
  styleUrls: ['./ingredient.component.css'],
})
export class DialogElementsExampleDialog {
  ingredientObject!: HelperIngredient;
  constructor(
    private dialogRef: MatDialogRef<DialogElementsExampleDialog>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.ingredientObject = data.ingredient;
    console.log(this.ingredientObject);
    console.log(this.ingredientObject.ingredients[0].strDescription);
  }

  ngOnInit(): void {}
}
