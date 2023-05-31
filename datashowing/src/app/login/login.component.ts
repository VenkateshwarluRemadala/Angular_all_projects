import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }
  data:any ;
url = 'http://localhost:3000/registration'
  ngOnInit(): void {
    this.http.get(this.url).subscribe((dates)=>{
     this.data = dates
    })
  }
  name:any;
  age:any;
  Login(){
    this.data.find((obj:any)=>{
      if(obj.name  == this.name && obj.passwor == this.age) {
        alert(obj.name+' '+'you have logged in succesfully')
      }
    })
    
    
  
      
  }

}



