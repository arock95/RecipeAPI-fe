import { Injectable } from "@angular/core";
import { IRecipe } from "../recipe/IRecipe";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ISubmitRecipe } from "../recipe/ISubmitRecipe";

@Injectable({
  providedIn: "root"
})
export class DataService {
  apiUrl: string = "http://db-server:8080/api/recipe";

  constructor(private http: HttpClient) {}

  postForm(recipe: ISubmitRecipe): Observable<any> {
    return this.http.post(this.apiUrl, recipe);
  }

  getAllRecipes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
