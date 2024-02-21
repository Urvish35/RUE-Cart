import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { dataItem } from 'src/app/shared/itemData.model';
import { LoginserviceService } from 'src/app/shared/loginservice.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent {

  products: dataItem[] = [];
  isEmptyShow: boolean = true;
  isDataShow: boolean = false;
  isSameId: any;
  isSame: boolean = false;
  dataVal: any;
  quantity:number = 1;
  TotalPrice:number=0

  constructor(private Service: LoginserviceService, private _https: HttpClient, private router: Router) { }

  ngOnInit() {
    if (this.Service.AddToCartData != undefined) {
      this.products=this.Service.AddToCartData;
      this.quantity=this.Service.quantityData
    }
    if (this.products.length != 0) {
      this.isEmptyShow = false
      this.isDataShow = true;
    }
    this.products.filter((item:any)=>{
      this.TotalPrice+=item.withDiscountPrice*item.quantity
    })
  }

  BuyItemFun(){
    this.Service.buyItem(this.products,this.TotalPrice)
    this.router.navigate(['/buyItem'])
  }
}

