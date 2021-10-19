import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {
  
columnDefs = [
    { header:"Name", field: 'name', sortable: true, filter: true },
    { header:"Rank", field: 'rank', sortable: true, filter: true }
];
rowData = [
  { name:"Rajesh" , rank:1 },
  { name:"Pritam" , rank:2 },
  { name:"Alok" , rank:3 },
  { name:"Vishal" , rank:4 }
];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
