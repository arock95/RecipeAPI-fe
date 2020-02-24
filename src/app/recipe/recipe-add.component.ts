import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {IRecipe} from './IRecipe';
import{NgForm} from '@angular/forms';
import { from } from 'rxjs';
import { DataService } from '../data/data.service';
import { ISubmitRecipe } from './ISubmitRecipe';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  @Output() newRecipe: EventEmitter<ISubmitRecipe> = new EventEmitter<ISubmitRecipe>();
  originalRecipe: IRecipe = {
    name: "",
    description: "",
    tags: ""
  };
  copyRecipe: IRecipe = {... this.originalRecipe};
  formInvalid:Boolean;
  submitRecipe: ISubmitRecipe;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if (form.valid){
      this.originalRecipe = {... this.copyRecipe};
      
      
      //convert from irecipe to isubmitrecipe for tags array
      this.submitRecipe = {
        name: this.originalRecipe.name,
        description: this.originalRecipe.description,
        tags: this.originalRecipe.tags.split(' ')
      }
      this.dataService.postForm(this.submitRecipe).subscribe(
        result => console.log("success", result),
        error => console.log("error", error)
      );
      this.newRecipe.emit(this.submitRecipe);
      this.originalRecipe = {name:"", description:"",tags:""}
      this.copyRecipe = {... this.originalRecipe};
      form.reset();
      this.formInvalid = false;
    }
    else{ this.formInvalid = true;}
  }
}
