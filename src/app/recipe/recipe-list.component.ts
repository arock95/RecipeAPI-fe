import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: any[];

  constructor() { }

  ngOnInit() {
  }

  onSubmitDelete(form: NgForm){
    console.log(form);
  }

}
