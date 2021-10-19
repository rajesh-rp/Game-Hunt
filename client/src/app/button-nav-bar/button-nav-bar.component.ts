import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-button-nav-bar',
  templateUrl: './button-nav-bar.component.html',
  styleUrls: ['./button-nav-bar.component.css']
})
export class ButtonNavBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  loadProfile(){
    this.router.navigate(['profile']);
  }

  loadAboutUs(){
    this.router.navigate(['aboutus']);
  }
}
