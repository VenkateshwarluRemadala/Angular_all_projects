import { Component, OnInit } from '@angular/core';
import { AcountantService } from '../acountant.service';


@Component({
  selector: 'app-listacountant',
  templateUrl: './listacountant.component.html',
  styleUrls: ['./listacountant.component.css']
})
export class ListacountantComponent implements OnInit {
 acounts:any
  constructor(private ac:AcountantService) { }
  title = 'stidentmanagementsystem';
  text = "venky"
  dat = new Date()
 
 ngOnInit(): void {
     this.acountantlist()
  }
  acountantlist(){
    this.ac.getdata().subscribe((a)=>this.acounts=a)
  }
  deleteacount(id:any){
    this.ac.deleteacount(id).subscribe((b)=>this.acountantlist())

  }

}
