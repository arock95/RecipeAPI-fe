import { Component } from '@angular/core';
import { IRecipe } from './recipe/IRecipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-fe';
  recipessvc: IRecipe[] = [
    {
      name:"Pasta",
      description: "Spaghetti and meat-a-balls-a",
      tags:"Easy, Italian"
    },
    {
      name:"Tacos",
      description: "Some tacos",
      tags: "Mexican"
    },
  ];

  AddRecipe(recipe:IRecipe):void{
    this.recipessvc.push(recipe);
  }
}
