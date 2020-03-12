import { Component } from '@angular/core';
import { IRecipe } from './recipe/IRecipe';
import { DataService } from './data/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-fe';
  recipessvc: IRecipe[];
  tag: string = "";

  constructor(private dataService: DataService) {
    this.dataService.getAllRecipes().subscribe(
      result => this.recipessvc = result,
      error => console.log("error", error)
    );
  }

  AddRecipe(recipe:IRecipe):void{
    this.recipessvc.push(recipe);
  }

  onSubmit(form: NgForm){
    this.dataService.getRecipeByTag(this.tag).subscribe(
      result => this.recipessvc = result,
      error => console.log("error", error)
    );
  }

}
