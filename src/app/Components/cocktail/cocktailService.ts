import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail, Bar } from './cocktail';

@Injectable({
  providedIn: 'root',
})
export class CockTailService {
  private url: string =
    'https://www.thecocktaildb.com/api/json/v1/1/random.php';

   GetRandomCockTail(): Observable<Bar> {
    let randomCockTail = this.url;
    return this.http.get<Bar>(randomCockTail);
  }

  constructor(private http: HttpClient) {}
}
