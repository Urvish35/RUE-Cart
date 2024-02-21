import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './home/accounts/accounts.component';
import { loginActivate } from './shared/loginActive.guard';
import { MyCartComponent } from './home/my-cart/my-cart.component';
import { BuyItemComponent } from './home/buy-item/buy-item.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent,canActivate:[loginActivate]},
  {path:'signUp',component:SignUpComponent},
  {path:'home',component:HomeComponent},
  {path:'account',component:AccountsComponent},
  {path:'mycart',component:MyCartComponent},
  {path:'buyItem',component:BuyItemComponent},
  // {path:'navbar',component:AccountsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
