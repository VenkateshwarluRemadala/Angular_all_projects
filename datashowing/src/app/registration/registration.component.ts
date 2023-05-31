import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http:HttpClient) { }
  studentObj = {"name":'','age':'','passwor':''}
  url = 'http://localhost:3000/registration'
  ngOnInit(): void {
    this.http.get(this.url).subscribe((dat)=>{
      console.log(dat);
      
    })
  }
  postData(){
   this.http.post(this.url, this.studentObj).subscribe();
   alert("data posted succesfully")
    
  }

}
