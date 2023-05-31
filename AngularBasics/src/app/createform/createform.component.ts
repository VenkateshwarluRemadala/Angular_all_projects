import { Component, OnInit } from '@angular/core';
import { forms } from '../forms';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent implements OnInit {

  constructor(private formservice:FormserviceService) { }
 form=new forms();
  ngOnInit(): void {
    console.log(this.form);
    
  }
  createdata(){
    this.formservice.createForm(this.form).subscribe()
    alert("data has been sent")
  }

  

}
