import { Component, OnInit } from '@angular/core';
import { dataItem } from 'src/app/shared/itemData.model';
import { LoginserviceService } from 'src/app/shared/loginservice.service';

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent implements OnInit{

  ProductData:any[]=[];
  TotalPrice!:number;
  quantity!:number;
  constructor(private service:LoginserviceService){}

  ngOnInit(){
    this.ProductData=this.service.BuyItemData
    this.TotalPrice=this.service.totalPrice;
    this.quantity=this.service.quantity;
    console.log("data",this.ProductData);
    this.ProductData.map((item:dataItem)=>{
      console.log(item.description);
      
    })

    // console.log("productData",);
    // console.log("TotalPrice",this.TotalPrice);
    // console.log("quantity",this.quantity);
    
  }

}
