import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { IngredientComponent } from './shopping/ingredient/ingredient.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    ShoppingComponent,
    HeaderComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
