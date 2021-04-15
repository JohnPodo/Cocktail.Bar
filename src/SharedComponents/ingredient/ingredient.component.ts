import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
})
export class IngredientComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  ngOnInit(): void {}
}

@Component({
  selector: 'dialogBody',
  templateUrl: 'dialogBody.html',
  styleUrls: ['./ingredient.component.css'],
})
export class DialogElementsExampleDialog {}
