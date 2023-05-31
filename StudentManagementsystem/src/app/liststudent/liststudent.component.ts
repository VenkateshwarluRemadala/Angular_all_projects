import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {
 students:any
  constructor(private stu:StudentserviceService) { }

  ngOnInit(): void {
    
 this.reloaddata()

  }
  
reloaddata(){
  this.stu.getdata1().subscribe((a)=>{this.students=a});
}
 deletestudent(id:any){
   this.stu.deletestudent1(id).subscribe((a)=>this.reloaddata())
 }

}


