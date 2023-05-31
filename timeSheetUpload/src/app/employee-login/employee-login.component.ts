import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  public loginForm:any = true
  public loginValid :any
  public username = '';
  public password = '';
  userDataList:any = [];
  loginSuccessfull:boolean = false;
  constructor(private router:Router, private http:HttpClient){

  }
  ngOnInit(): void {
    // this.getUserData()
  }

//   getUserData(){
//      this.http.get<any>('https://timesheetupload-default-rtdb.firebaseio.com/employeedetails.json').subscribe((data)=>{
//       for(let i in data){
        
//         this.userDataList.push({...data[i],id:i});
//         console.log({id:i,...data[i]})
// }
//      })
//   }
  onSubmit(){
    // let data = this.userDataList.find((value:any)=>value.fullName===this.username)

    // if(data && data.password === this.password){
    //   alert( this.username + " "+"have logged in succesfully")
    //   localStorage.setItem('key1','success1')
    //   this.router.navigate (['navbar'])
    //   this.loginSuccessfull = true
      
    // }
    // else{
    //   alert("You have entered the wrong credentials")
    // }
    if(this.username === "venkat" && this.password === "venkat"){
      alert( this.username + " "+"have logged in succesfully")
      localStorage.setItem('key1','success1')
      this.router.navigate (['navbar'])
      this.loginSuccessfull = true
    }
    else{
      alert("You have entered the wrong credentials")

    }
  }

}
