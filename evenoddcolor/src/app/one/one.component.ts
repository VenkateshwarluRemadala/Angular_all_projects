import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor() { }
  arr:any = [];
  evenNumbers:any = [];
  oddNumbers:any = [];
  numbers:any = 20;
  ngOnInit(): void {
    console.log("hello");
    for(let i:any = 1; i<=this.numbers; i++){
    this.arr.push(i)
  }
   for(let i of this.arr){
     if(i%2===0){
      this.evenNumbers.push(i)
     }
     else{
      this.oddNumbers.push(i)
     }
   }
   console.log(this.evenNumbers);
   console.log(this.oddNumbers);
   
   
    
  }

getNumbers(){
  
}

}
