import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { forms } from '../forms';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
forms:any
  constructor(private formsservice:FormserviceService, private router:Router) { }

  ngOnInit(): void {
   this.formsservice.getForms().subscribe(e=>this.forms=e)
    
  }
  updateForm(id:number)
  {
    this.router.navigate(['update',id]);
  }
  

}
