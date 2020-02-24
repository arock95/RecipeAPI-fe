import { Injectable } from '@angular/core';
import { IRecipe } from '../recipe/IRecipe';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  postUrl:string = 'http://localhost:52397/api/recipe';
  constructor(private http: HttpClient) { }

  postForm(recipe: IRecipe): Observable<any>{
    return this.http.post(this.postUrl, recipe);
  }
}