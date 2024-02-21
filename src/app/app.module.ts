import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './home/accounts/accounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { MessagesModule } from 'primeng/messages';
import { MyCartComponent } from './home/my-cart/my-cart.component';
import { DataViewModule  } from 'primeng/dataview';
import { TagModule } from "primeng/tag";
import { BuyItemComponent } from './home/buy-item/buy-item.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    AccountsComponent,
    NavbarComponent,
    MyCartComponent,
    BuyItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RatingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MessagesModule,
    DataViewModule,
    TagModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
