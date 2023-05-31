import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }
  // loginForm: any=new FormGroup({username: new FormControl(),
  // password: new FormControl()}
  // )
  // collectdata(data:any){
  //   this.loginForm=data.value
  //   console.log(this.loginForm);
    

  // }
loginobject:any;
       
loginForm:any= this.fb.group({firstname:["",Validators.required],lastname: ["",Validators.required], password: ["",Validators.required], 
age: ["",Validators.required], contact: ["",Validators.required], adar: ["",Validators.required], dob: ["",Validators.required], add: ["",Validators.required]
});


      



collectdata(){
  this.loginobject=this.loginForm.value
  console.log(this.loginobject);
          
  }
      // example for normal two way data binding.
      // ==========================================
      // venkat:any={firstname:"",
      //              lastname:"",
      //             password:"",
      //           age:""}
      // collectdata(){
        
      //   console.log(this.venkat)
      // }

          







}
