import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filternamebychethan';
   data:any = [

    {

        "Header": "Component,Type, Value, Unit",

        "Index": 0,

        "Name": "Monitor All",

    },

    {

        "GraphEnabled": "No",

        "Index": 1,

        "Name": "CPU1",

    },

    {

        "Header": "",

        "Index": 12,

        "Name": "Random data",

    },

    {

        "GraphEnabled": "No",

        "Index": 14,

        "Name": "Frequency",

    },

    {

        "GraphEnabled": "No",

        "Index": 15,

        "Name": "DTS",

    },

    {

        "GraphEnabled": "No",

        "Index": 16,

        "Name": "Target PState Request Ratio",



    },

    {

        "GraphEnabled": "No",

        "Index": 17,

        "Name": "Current PState Ratio",

    },

    {

        "GraphEnabled": "No",

        "Index": 18,

        "Name": "Turbo Capability",

    },

    {

        "GraphEnabled": "No",

        "Index": 19,

        "Name": "SGX Support",

    },

    {

        "GraphEnabled": "No",

        "Index": 20,

        "Name": "CPU1",

    },

];

username: any = '';
recievedUserName: any = '';
finalArray:any = [];

// namesArray:any = [];
// search(){
//  for(let i of this.data){
    // for(let j in i){
    //   this.finalArray.push(i[j])
    // }
//  }
//  console.log(this.finalArray)
//  for(let i of this.finalArray){
//   if(i === this.username){
//      this.namesArray.push(i)
//   }
  
  
//  }
//  console.log(this.namesArray)


// }

ngOnInit(): void {
  this.data.map((ele:any)=>{ele.D})
  
}

}
