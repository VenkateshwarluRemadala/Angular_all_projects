import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  adminemail:string=""
  adminpassword:any=""
  acountantemail:any=""
  acountantpassword:any=""
  
  

  ngOnInit(): void {  
  }
  adminlogin(){
    if(this.adminemail=="venkatesh" && this.adminpassword=="venkatesh"){
      alert("you logged in succesfully")
      console.log(this.adminemail);
      console.log(this.adminemail);
      
      // localStorage.setItem('key','success')
     this.router.navigate(["account"])
    }
    else{
      alert("sorry you entered wrong credentials")
    }
  }
  acountantlogin(){
    if(this.acountantemail=="venkatesh1" && this.acountantpassword=="venkatesh1"){
      alert("you logged in succesfully")
      localStorage.setItem('key1','success1')
      this.router.navigate(["student"])
    }
    else{
      alert("sorry you entered wrong credentials")
    }
  }
  

}
