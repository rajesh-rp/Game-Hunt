import { Component, OnInit } from '@angular/core';

import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(
    private http:HttpService
  ) { }
  
  userName=this.http.userName;
  isAuthenticated=this.http.isAuthenticated;
  ngOnInit(): void {
   
  }
   

}
