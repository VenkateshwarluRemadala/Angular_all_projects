import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcountantService } from '../acountant.service';

@Component({
  selector: 'app-createacountant',
  templateUrl: './createacountant.component.html',
  styleUrls: ['./createacountant.component.css']
})
export class CreateacountantComponent implements OnInit {

  constructor(private http:AcountantService,private router:Router) { }
 acount={name:"",
 email:"",
 sex:"",
 course:""}
  ngOnInit(): void {
  }
postdata(){
  this.http.createdata(this.acount).subscribe();
  alert("data has posted succesfully");
  this.router.navigate(["account/listacount"]);

}
}
