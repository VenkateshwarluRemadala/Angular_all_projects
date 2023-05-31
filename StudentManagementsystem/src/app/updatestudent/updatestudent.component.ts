import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  students:any ;
  totalRecords:any
  page:any=1
  constructor(private stud:StudentserviceService) { 
    
  }
  getdata(){
    this.stud.getdata1().subscribe((dat)=>{
    console.log(dat)
    
    this.students=dat;
    this.totalRecords=this.students.length;
  })
  }

  ngOnInit(): void {
    this.getdata()
  }

}
