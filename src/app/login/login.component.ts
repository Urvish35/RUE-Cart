import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  errorMessage:boolean=false;

  messages1:any;
  messages2: any;

  constructor(private _http:HttpClient,private router:Router){}

  loginForm = new FormGroup({
    userName : new FormControl(''),
    pass : new FormControl('')
  })

  ngOnInit(){
  //   this.messages1 = [
  //     { severity: 'success', summary: 'Success', detail: 'login successfully' }
  // ];

  // this.messages2 = [
  //   { severity: 'error', summary: 'Error', detail: 'Enter valid Information' },
  // ];
  }

  loginFun(){
    this._http.get('http://localhost:3000/loginData').subscribe((item:any)=>{
      item.filter((data:any)=>{
        if(data.userName == this.loginForm.get('userName')?.value && data.pass == this.loginForm.get('pass')?.value){
          this.router.navigate(['home'],{queryParams:{userName:data.userName}})
          localStorage.setItem('token',JSON.stringify("authKey"))
          localStorage.setItem('userName',data.userName)
        }
      })
    })
  }
}
