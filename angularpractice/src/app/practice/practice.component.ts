import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  objectData : any = {
    "DELHI":{ 
        "new delhi": 
        { "touchpoints": 
        [
            { "claimNo": "202200011191", "touchpointValue": "New Delhi Railway Station Bhavbhuti Marg", "touchpointName": "Policy Holder", "touchpointState": "DELHI", "touchpointCity": "NEW DELHI", "createUser": 1190, "createdDate": "Oct 6, 2022, 4:02:21 PM", "caseassignedTime": "Oct 6, 2022, 4:02:21 PM", "touchpointId": 1357, "latitude": 28.6428915, "longitude": 77.2190894, "caseassignedName": "", "surveyorName": "", "isChecked": false, "isDisabled": false, "isReffered": false, "status": "Unassigned" }, 
            { "claimNo": "202200011191", "touchpointValue": "New Delhi Railway Station Parcel Office Ajmeri Gate", "touchpointName": "Driver", "touchpointState": "DELHI", "touchpointCity": "NEW DELHI", "createUser": 1190, "createdDate": "Oct 6, 2022, 3:48:41 PM", "caseassignedTime": "Oct 6, 2022, 3:48:41 PM", "touchpointId": 1356, "latitude": 28.644512, "longitude": 77.2215346, "caseassignedName": "", "surveyorName": "", "isChecked": false, "isDisabled": false, "isReffered": false, "status": "Unassigned" }], "isChecked": false, "isDisabled": false } },
    "KARNATAKA": { "bengaluru": { "touchpoints": [{ "claimNo": "202200011191", "touchpointValue": "Vijayanagara TTMC 22nd Main Road", "touchpointName": "Police Station", "touchpointState": "KARNATAKA", "touchpointCity": "BENGALURU", "createUser": 1190, "createdDate": "Oct 6, 2022, 4:03:57 PM", "caseassignedTime": "Oct 6, 2022, 4:03:57 PM", "touchpointId": 1358, "latitude": 12.96551, "longitude": 77.534707, "caseassignedName": "", "surveyorName": "", "isChecked": false, "isDisabled": false, "isReffered": false, "status": "Unassigned" }], "isChecked": false, "isDisabled": false } }
}

touchPointNamesArray :any = [];

emtyArray : any= [];

  constructor() { }

  ngOnInit(): void {
    
this.emtyArray.push(this.objectData);
this.emtyArray.map((e:any)=>e.DELHI['new delhi'].touchpoints.map((a:any)=>this.touchPointNamesArray.push(a.touchpointName)))
this.emtyArray.map((f:any)=>f.KARNATAKA.bengaluru.touchpoints.map((b:any)=>this.touchPointNamesArray.push(b.touchpointName)))
 console.log(this.touchPointNamesArray)

}
//  recursion (){
//    this.emtyArray.push(this.objectData)
//    console.log(this.emtyArray)
// }
  
  
}

