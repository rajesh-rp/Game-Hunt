import { Component, OnInit } from '@angular/core';
import { MatchDescription } from '../../Models/MatchDescription';
import {Router} from "@angular/router";
@Component({
  selector: 'app-free-matches',
  templateUrl: './free-matches.component.html',
  styleUrls: ['./free-matches.component.css']
})
export class FreeMatchesComponent implements OnInit {
  matches!: Array<MatchDescription>;
  constructor(private router:Router) { }
  ngOnInit(): void {
    
    this.matches=[
        {
           imagePath:"https://cdn1.dotesports.com/wp-content/uploads/2020/09/02214210/new-erangel.jpg",
           mapName:"Erangle",
           type:"Squad",
           date:"31-08-2021",
           idPasswordTime:"10am",
           startTime:"2pm"
        },
        {
          imagePath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQxr2mj_kt-AjcaxDLMUm0I3GlWtNmDU4DA&usqp=CAU",
          mapName:"Shanhok",
          type:"Duo",
          date:"01-09-2021",
          idPasswordTime:"9am",
          startTime:"2pm"
       },
       {
        imagePath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MKNLarK1kUWirNL-jjLrXvvg5WyzMhezzA&usqp=CAU",
        mapName:"Miramar",
        type:"Squad",
        date:"02-08-2021",
        idPasswordTime:"8am",
        startTime:"2pm"
       },
       {
        imagePath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSh-ktyPB--josrNGUsB8DH0TFHp8mjcbDSg&usqp=CAU",
        mapName:"Livik",
        type:"Solo",
        date:"03-09-2021",
        idPasswordTime:"1pm",
        startTime:"2pm"
       },

    ]

  }
  
  slotBooking(){
       this.router.navigate(['bookslot']);
  }
  

}
