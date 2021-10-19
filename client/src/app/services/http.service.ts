import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../Models/UserDetails';
import { UserDetailsForLogin } from '../Models/UserDetailsForLogin.model';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
   userName="";
   isAuthenticated = false;
  constructor(
    private http:HttpClient
    ) { }

    addUser(userDetails:UserDetails){
         console.log(userDetails);
         return this.http.post("http://localhost:3000/adduser",userDetails);
    }
    loginUser(userDetails:UserDetailsForLogin){
      console.log(userDetails);
      return this.http.post("http://localhost:3000/userlogin",userDetails);
    }
    isLoggedIn(){
      return !!localStorage.getItem('token');
    }
}
