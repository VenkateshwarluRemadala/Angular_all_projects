import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lazyhome',
  templateUrl: './lazyhome.component.html',
  styleUrls: ['./lazyhome.component.css']
})
export class LazyhomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  councap:any=[{"India":"New elhi"},{"India":"United States"},{"India":"Melbourne"},{"India":"Masscow"}];

  sorting:any=[4,2,1,3,46,44,2344,44];

  ss:any=this.sorting.sort((a: any,b: any)=>a-b);


}
