import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forms } from '../forms';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form:any
  id: any;
 

  constructor(private route:ActivatedRoute, private router:Router ,private formservice:FormserviceService) { }

  ngOnInit(): void {
    this.form = new forms();

    this.id = this.route.snapshot.params['id'];
    
    this.formservice.getForm(this.id)
      .subscribe(data => {
        console.log(data)
        this.form = data;
      }, error => console.log(error));
  }
  updateEmployee() {
    this.formservice.updateForm(this.id, this.form)
      .subscribe(data => {
        console.log(data);
        this.form = new forms();
        
      }, error => console.log(error));
  }
  submitted = false;

  onSubmit() {
    this.updateEmployee(); 
    this.submitted=true;   
  }

}
