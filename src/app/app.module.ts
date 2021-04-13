import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailComponent } from '../Components/cocktail/cocktail.component';
import { FormsModule } from '@angular/forms';
import { CocktailViewComponent } from '../SharedComponents/cocktail-view/cocktail-view.component';

@NgModule({
  declarations: [AppComponent, CocktailComponent, CocktailViewComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
