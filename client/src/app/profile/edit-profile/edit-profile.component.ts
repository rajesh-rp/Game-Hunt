import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/Models/UserDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userDetails=new UserDetails();
  teamString:string="";
  confirmPassword:string="";
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userDetails.email="pritamnayak@gmail.com";
    this.userDetails.name="Pritam";
    this.userDetails.userName="Pritam Nayak";
    this.userDetails.password="pritamnayak97";
    this.userDetails.phoneNumber="9778222339";
    this.userDetails.team=["Pritam","Rajesh","Alok","Vishal"];
    for(let i=0;i<this.userDetails.team.length;i++){
        this.teamString+=this.userDetails.team[i]+" ";
    }
  }
  loadEditProfile(){
    this.router.navigate(['editprofile']);
  }

}
