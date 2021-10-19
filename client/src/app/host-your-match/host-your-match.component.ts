import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-host-your-match',
  templateUrl: './host-your-match.component.html',
  styleUrls: ['./host-your-match.component.css']
})
export class HostYourMatchComponent implements OnInit {
  signedUp: boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  checkIfSignedUp(){
    if(this.signedUp==true){
       this.router.navigate(['registerforfreematch']);
    }
    else{
      this.router.navigate(['signup']);
    }
  }

}
