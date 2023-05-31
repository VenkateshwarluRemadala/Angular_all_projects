import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName:[''],
      phoneNumber:[''],
      email:[''],
      password:['']
    })
  }
signUp(){
   this.http.post<any>('https://timesheetupload-default-rtdb.firebaseio.com/admin.json',this.signupForm.value).subscribe((res)=>{
      alert("You have signed up successfully");
      this.signupForm.reset();
       this.router.navigate(['/employee-login'])
   })
}

}
