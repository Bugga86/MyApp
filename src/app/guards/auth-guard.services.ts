import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
 

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    //    if(localStorage.getItem("username")=== "Administrator"){
        if(sessionStorage.getItem("username")==="Administrator"){
        return true;
       } else {
           return false;
       }
    }
}
