import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-timesheet-upload',
  templateUrl: './employee-timesheet-upload.component.html',
  styleUrls: ['./employee-timesheet-upload.component.css']
})
export class EmployeeTimesheetUploadComponent implements OnInit {

  timeSheet: any;

  errorMessgae:any;



  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.timeSheet = new FormGroup({

      empName: new FormControl('', [Validators.required]),
      empId: new FormControl('', [Validators.required]),

      clientName: new FormControl("", [Validators.required]),

      startDate: new FormControl("", [Validators.required]),

      endDate: new FormControl("", [Validators.required]),

      fileName: new FormControl("", [Validators.required])

    });

  }



  submited() {

    console.log(this.timeSheet.value)
    this.http.post<any>('https://timesheetupload-default-rtdb.firebaseio.com/timeSheet.json',this.timeSheet.value).subscribe((res)=>{
      alert("You have submitted your timesheet successfully");
      this.timeSheet.reset();
      

   })
   

    

  }
  getToday(){

    return new Date()

  }

 

  onImageChangeFromFile($event: any) {

    let file = $event.target.files;
    for(let i = 0; i<file.length; i++){

      if (file) {

  console.log("sucess")

      }

      else {

        this.errorMessgae = "*Png,xlsx,jpeg Files are Required"

      }

  }
  }


}
