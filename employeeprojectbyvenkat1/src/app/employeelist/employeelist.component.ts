import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import{Employee} from "src/app/employee"


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employees: Observable<Employee[]> | undefined;
  constructor(private employeeservice:EmployeeService,private route:Router) { }

  ngOnInit(): void {
    this.reloadingData()
  }
  reloadingData(){
    this.employees=this.employeeservice.getEmployeeList();
  }
  deleteEmployee(id:number){
    this.employeeservice.deleteEmployee(id)
    .subscribe(
      data=>{
        console.log(data);
        this.reloadingData();
        
      },
      (error)=>console.log(error));
      
    
  }
  employeeDetails(id:number){
    this.route.navigate(['employeeDetails',id])
  }
  updateDetails(id:number){
    return this.route.navigate(['employeeUpdate',id])

  }
}
