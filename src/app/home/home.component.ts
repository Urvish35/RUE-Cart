import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginserviceService } from '../shared/loginservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value: any;
  dataval: any;
  flagVal: boolean = true;
  filterArr: any[] = []
  isDataShow: boolean = false;
  same: boolean = true;

  @ViewChild('search') searchVal: any;
  // @Input() searchVal: any

  constructor(private _https: HttpClient, private route: ActivatedRoute, private service: LoginserviceService) { }


  ngOnInit() {
    this._https.get("http://localhost:3000/itemData").subscribe(item => {
      this.dataval = item;
    })
  }

  onSearchChange(data: any) {
    this.dataval.filter((item: any) => {
      if (item.description.split(" ")[0].includes(data.value)) {
        if (!this.filterArr.includes(item)) {
          this.filterArr.push(item);
        }
        else {
          this.filterArr = [];
          this.filterArr.push(item)
        }
        console.log("helledfrgo", this.filterArr);
      }
    })
    if (this.filterArr.length > 0) {
      this.isDataShow = true
      if (data.value == '') {
        this.isDataShow = false
        this.filterArr = [];
      }
    }
    else {
      this.isDataShow = false
    }
  }

  AddToCartFun(data: any) {
    console.log(data)
    console.log(this.service.AddToCartData)

    if (this.service.AddToCartData.length == 0) {

      this.service.AddToCart(data)

    }
    else {
      this.service.AddToCartData.filter((e: any) => {
        console.log(e.id, data.id);
        if(e.id == data.id){
          this.same=false;
          e.quantity++
        }
      })
      if(this.same){
        this.service.AddToCart(data)
      }
    }
  }
}


