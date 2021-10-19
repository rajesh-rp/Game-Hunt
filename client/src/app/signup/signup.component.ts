import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'

import { HttpService } from '../services/http.service';
import { UserDetails } from '../Models/UserDetails';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private http:HttpService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  signupForm = this.fb.group({
    name:[''],
    userName:[''],
    email:[''],
    phoneNumber:[''],
    password:[''],
    confirmPassword:['']
  })
  
  onSubmit(){
    this.addNewUser(this.signupForm.value);
  }

  addNewUser(userDetails:UserDetails){
     this.http.addUser(userDetails).subscribe(response=>{
       if(response){
        let resToken: any= response;
        if(resToken.token != ""){
          console.log(resToken);
          localStorage.setItem('token', resToken.token);
          this.http.isAuthenticated = true;
          this.http.userName=resToken.userData.userName;
          console.log(this.http.isAuthenticated);
          this.router.navigate(['/home']);
        }
        else{
          this.router.navigate(['/signup'])
        }
        
       }
       else{
          console.log("Successfully added new user.");
       }
     })
  }
}
