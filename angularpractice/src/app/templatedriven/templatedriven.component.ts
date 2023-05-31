import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  constructor(private http: HttpClient) { }
  object :any = {name: "", age: "", contact: ""}
  ngOnInit(): void {
  }
  postdata(){
    this.http.post('http://localhost:3000/template', this.object).subscribe(a=>a)
  }

}
