import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {

  constructor() { }
  // templateobject:any
obj:any={name:"",age:""}
 
  ngOnInit(): void {
   console.log( this.obj)
  }
  // Createdata(value:any){
  //   this.templateobject=value.value
  //   console.log(this.templateobject);
    
    
     
  // }
  // createdata(value:any){
  //   this.object1=value.value
  //   console.log(this.object1)
  // }
  
}
