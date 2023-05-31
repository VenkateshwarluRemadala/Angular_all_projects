import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent implements OnInit {

  id: number=0;
  employee: Employee = new Employee;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      }, error => console.log(error));
  }
  submitted = false;

  onSubmit() {
    this.updateEmployee(); 
    this.submitted=true;   
  }

  gotoList() {
    this.router.navigate(['/employeesList']);
  }
}