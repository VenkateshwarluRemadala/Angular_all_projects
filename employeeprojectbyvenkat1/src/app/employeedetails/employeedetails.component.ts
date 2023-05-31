import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
 id:number=0;
 employee:Employee=new Employee
  constructor(private route:ActivatedRoute,private router: Router,private employeeservice:EmployeeService) { }

  ngOnInit(): void {
  
  this.employee=new Employee();
  this.id=this.route.snapshot.params['id'];
  this.employeeservice.getEmployee(this.id).subscribe(data=>{console.log(data); this.employee=data;}
,error=>console.log(error));
  }
  list(){
    this.router.navigate(['employees'])
  }
}
