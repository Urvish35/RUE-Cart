import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck{

  Name:any;

  constructor(private router:Router,private route:ActivatedRoute){}

  ngOnInit() {
    
  }

  ngDoCheck(): void {
    // this.Name=this.route.snapshot.queryParamMap.get('userName')
    this.Name=localStorage.getItem('userName')
    // console.log("this.Name",this.Name);
  }

  signOutFun(){
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
  }
}
