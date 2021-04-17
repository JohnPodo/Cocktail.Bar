import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailComponent } from '../Components/cocktail/cocktail.component';
import { FormsModule } from '@angular/forms';
import { CocktailViewComponent } from '../SharedComponents/cocktail-view/cocktail-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IngredientComponent,DialogElementsExampleDialog } from '../SharedComponents/ingredient/ingredient.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CocktailComponent,
    CocktailViewComponent,
    IngredientComponent,
    DialogElementsExampleDialog
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
