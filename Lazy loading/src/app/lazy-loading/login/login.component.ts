import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reactive:any=new FormGroup({username: new FormControl(),password: new FormControl(), contact: new FormControl(), add: new FormControl()})

  reactiveobject:any;

  collectdata(){

  this.reactiveobject=this.reactive.value;

  console.log(this.reactiveobject);
  alert("data has posted")

  }
}
