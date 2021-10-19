import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
 
  constructor(
    private router:Router,
    private http:HttpService
  ){}
  
   canActivate():boolean {
        
        if(this.http.isLoggedIn()){
           return true;
        }
        else{
          this.router.navigate(['/login']);
          return false;
        }
   }

}
