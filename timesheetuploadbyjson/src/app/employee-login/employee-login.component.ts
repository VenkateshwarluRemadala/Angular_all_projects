import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  
  public loginForm:any = true
  public loginValid :any
  public employeename = '';
  public employeepassword = '';
  employeeDataList:any ;
  loginSuccessfull:boolean = false;
  constructor(private router:Router, private http:HttpClient, private employeeservice: EmployeeServiceService ){

  }

  ngOnInit(): void {
      this.reloadingData()
       console.log(this.employeeDataList)

  }

  reloadingData(){
    this.http.get('http://localhost:3000/employeeregistration').subscribe(res=>{this.employeeDataList = res;
    console.log(this.employeeDataList)
  });
  }
  onSubmit(){
    let data = this.employeeDataList.find((value:any)=>value.employeeName===this.employeename)

    if(data && data.employeePassword === this.employeepassword){
      alert( this.employeename + " "+"have logged in succesfully")
      localStorage.setItem('key1','success1')
      this.router.navigate (['navbar'])
      this.loginSuccessfull = true
      
    }
    else{
      alert("You have entered the wrong credentials")
    }
  }

}
