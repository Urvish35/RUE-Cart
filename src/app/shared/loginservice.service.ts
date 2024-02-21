import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  localStorageVal:any;
  localStorageData:any;
  AddToCartData:any[]=[];
  quantityData:number=1;
  BuyItemData:any[]=[]
  totalPrice!:number
  quantity!:number

  constructor(private _https:HttpClient) { }

  getTocken(){
    return this.localStorageVal=localStorage.getItem('token')
  }

  getProducts(){
    this._https.get("http://localhost:3000/itemData").subscribe(item => {
      return item;
    })
  }

  AddToCart(item:any){
    this.AddToCartData.push(item);
    // console.log("item",item);
  }

  buyItem(data:any,TotalPrice:number){
    this.BuyItemData=data
    this.totalPrice=TotalPrice;
  }
}
