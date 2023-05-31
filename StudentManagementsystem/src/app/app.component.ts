import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren("firstchild") children!: QueryList<any>


  ngAfterViewInit() {
    // this.children.nativeElement.style.color="orange"
    // this.children.nativeElement.style.color="blue"
    console.log(this.children);
    this.children.first.nativeElement.style.color = "green"
    this.children.last.nativeElement.style.color = "red"

  }
}
