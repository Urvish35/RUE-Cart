import { inject } from "@angular/core"
import { LoginserviceService } from "./loginservice.service"
import { Router } from "@angular/router";

export const loginActivate=()=>{
    let loginService = inject(LoginserviceService);
    let router = inject(Router)

    if(loginService.getTocken()=='"authKey"'){
        router.navigate(['/home'])
        return false;
    }
    else{
        return true;
    }
}