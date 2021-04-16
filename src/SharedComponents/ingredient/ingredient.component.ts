import { Component, OnInit, Input, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { CockTailService } from '../../Components/cocktail/cocktailService';
import { Ingredient } from '../../Components/cocktail/cocktail';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
})
export class IngredientComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  dialogConfig = new MatDialogConfig();
  openDialog() {
    this.dialogConfig.data = {
      ingredientName: this.ingredient,
    };
    this.dialog.open(DialogElementsExampleDialog, this.dialogConfig);
  }

  @Input() ingredient!: string;

  ngOnInit(): void {}
}

@Component({
  selector: 'dialogBody',
  templateUrl: 'dialogBody.html',
  styleUrls: ['./ingredient.component.css'],
})
export class DialogElementsExampleDialog {
  ingredientName!: string;

  ingredientObject!: Ingredient;

  constructor(
    private service: CockTailService,
    private dialogRef: MatDialogRef<DialogElementsExampleDialog>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.ingredientName = data.ingredientName;
  }

  ngOnInit(): void {
    this.GetIngredient(this.ingredientName);
  }
  GetIngredient(ingredient: string) {
    this.service.GetIngredients(ingredient).subscribe((data) => {
      this.ingredientObject = data;
    });
  }
}
