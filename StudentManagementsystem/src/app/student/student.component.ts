import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router:Router) { }
 str="venkatesh"
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('key')
    alert("you logged out succesfully")
    this.router.navigate(["home"])
  }

}
