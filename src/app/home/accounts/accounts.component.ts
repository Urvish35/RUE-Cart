import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit{

  constructor(private route:ActivatedRoute){}

  AccountForm = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    DD:new FormControl(''),
    MM:new FormControl(''),
    YYYY:new FormControl(''),
    gender:new FormControl(''),
    paymentMethod:new FormControl(''),
    cardNumber:new FormControl(''),
    cardCVC:new FormControl(''),
    ExpDate:new FormControl(''),
    ExpYear:new FormControl('')
  })

  ngOnInit(): void {
    
  }

}
