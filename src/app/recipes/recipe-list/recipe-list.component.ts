import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A test Recipe', 'This is simple a test','https://tse3.mm.bing.net/th?id=OIP.8pJj1Wc5uqZEQPe7Abo4BAHaJl&pid=Api&P=0'),
    new Recipe('A test Recipe', 'This is simple a test','https://tse3.mm.bing.net/th?id=OIP.8pJj1Wc5uqZEQPe7Abo4BAHaJl&pid=Api&P=0')

  ];

  constructor(){}

  ngOnInit(): void {

  }

}
