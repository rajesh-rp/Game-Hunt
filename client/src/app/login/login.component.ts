import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
     private fb:FormBuilder,
     private http:HttpService,
     private router:Router
    ) { }

  ngOnInit(): void {
  }

  logInForm=this.fb.group({
    email:[''],
    password:['']
  });

  onSubmit(){
      this.http.loginUser(this.logInForm.value).subscribe((res)=>{
        if(res){
          let resToken: any= res;
          console.log(resToken.userData[0].name);
          if(resToken.token != "" ){
            console.log(resToken);
            localStorage.setItem('token', resToken.token);
            this.http.isAuthenticated = true;
            this.http.userName=resToken.userData[0].userName;
            console.log(this.http.isAuthenticated);
            this.router.navigate(['/home']);
          }
          else{
            this.router.navigate(['/login']);
          }
          
        }
        
        else{
          console.log("userLogged in succcessfully.");
        }
      })
  }

}
