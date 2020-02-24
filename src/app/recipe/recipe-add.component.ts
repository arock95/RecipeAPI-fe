import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {IRecipe} from './IRecipe';
import{NgForm} from '@angular/forms';
import { from } from 'rxjs';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  @Output() newRecipe: EventEmitter<IRecipe> = new EventEmitter<IRecipe>();
  originalRecipe: IRecipe = {
    name: "",
    description: "",
    tags: ""
  };
  copyRecipe: IRecipe = {... this.originalRecipe};
  formInvalid:Boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if (form.valid){
      this.originalRecipe = {... this.copyRecipe};
      this.newRecipe.emit(this.originalRecipe);
      this.originalRecipe = {name:"", description:"",tags:""}
      this.copyRecipe = {... this.originalRecipe};
      form.reset();
      this.formInvalid = false;
      this.dataService.postForm(this.originalRecipe).subscribe(
        result => console.log("success", result),
        error => console.log("error", error)
      );
    }
    else{ this.formInvalid = true;}
  }
}
