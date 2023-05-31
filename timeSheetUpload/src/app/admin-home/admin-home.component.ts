import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  employeeDataList:any = []
  empName:any;
  p :number = 1;
  // displayedColumn:string[] = ["empName","clientName","startDate","endDate"]
  constructor(private router:Router, private http:HttpClient){

  }
  ngOnInit(): void {
    this.getEmployeeData()
  }

  getEmployeeData(){
     this.http.get<any>('https://timesheetupload-default-rtdb.firebaseio.com/timeSheet.json').subscribe((data)=>{
      for(let i in data){
        
        this.employeeDataList.push({...data[i],id:i});
        console.log({id:i,...data[i]})
}
     })
  }
Search(){
  if(this.empName == ""){
    this.ngOnInit();
  }else{
    this.employeeDataList = this.employeeDataList.filter((res: any)=>{
    return res.empName.toLocaleLowerCase().match(this.empName.toLocaleLowerCase())
    })
  }
}
key:string = 'empID';
reverse:boolean = false;
sort(key:string){
 this.key = key;
 this.reverse = !this.reverse
}
}
