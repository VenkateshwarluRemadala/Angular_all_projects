import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formspractice';
  name:any="";
username="rabert"
  ngOnInit(){
    console.log(this.name)
  }
  getdata(data:any){
    this.name=data
    
  }
}
