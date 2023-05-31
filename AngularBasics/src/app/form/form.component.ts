import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name1:string="";
  age1:string=''
  phone1:string=''
  address1:string="";
  ram:string="";
  kam:string="";

  constructor() { }

  ngOnInit(): void {
  }
createdata(val1:string,val2:string,val3:string,val4:string){
  this.name1=val1;
  this.age1=val2;
  this.phone1=val3;
  this.address1=val4;


}
list=["venkat","vinay","kalyan","mohit"]
}
