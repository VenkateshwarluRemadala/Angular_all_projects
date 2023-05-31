import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
 @Input() data =""
 name: any = "remadala";
 
 @Output() changeName = new EventEmitter();


 nameChange() {
  let name = "Ramadala";
  this.changeName.emit(name);
 }
}
