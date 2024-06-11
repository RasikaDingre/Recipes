import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipeComponent } from './components/receipe/receipe.component';
import { LoginComponent } from './components/login-page/login-page.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: ReceipeComponent },
  { path: 'recipe-details/:id', component: RecipeDetailsComponent },
  { path: 'cart-page/:id', component: CartPageComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
