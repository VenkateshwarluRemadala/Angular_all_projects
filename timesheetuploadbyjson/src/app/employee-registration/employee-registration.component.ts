import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  public signupForm :any
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      
      empId:[''],
      employeeName:[''],
      employeeClient: [''],
      employeePassword:[''],
      employeeContactNumber:[''],
      employeeMail: ['']
    })
    
  }
signUp(){
   this.http.post<any>(' http://localhost:3000/employeeregistration',this.signupForm.value).subscribe((res)=>{
     console.log(res)
      alert("You have signed up successfully");
      this.signupForm.reset();
       this.router.navigate(['/employee-login'])
   })
}

}
