import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipeComponent } from './components/receipe/receipe.component';
import { LoginComponent } from './components/login-page/login-page.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:ReceipeComponent},
 {path:'recipe-details/:id', component:RecipeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
