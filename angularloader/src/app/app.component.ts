import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularloader';
  name:any = '';
  age:any ;

  arr:any = [1,2,3,43,4]
  submitData(){
    console.log(this.age, this.name);
    
  }
}
