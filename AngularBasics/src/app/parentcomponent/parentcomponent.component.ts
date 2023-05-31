import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: any = "venkateshwarlu";


  public changeNameFn(e: any) {
    this.name = e;
  }
}
