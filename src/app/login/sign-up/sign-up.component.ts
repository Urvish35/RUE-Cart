import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private _http:HttpClient,private router:Router){}

  signUpForm = new FormGroup({
    userName : new FormControl(''),
    pass : new FormControl(''),
    cfPass : new FormControl('')
  })

  formVal(){
    console.log(this.signUpForm.value);
    if(this.signUpForm.get('pass')?.value===this.signUpForm.get('cfPass')?.value){
      this._http.post('http://localhost:3000/loginData',this.signUpForm.value).subscribe(item=>{})
      this.signUpForm.reset();
      this.router.navigate(['login'])
    }
    else{
      alert("enter same Password")
    }
    
  }
}
