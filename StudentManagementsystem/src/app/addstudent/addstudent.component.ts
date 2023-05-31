import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private stu1: StudentserviceService, private router: Router) { }
  stu = { name: "", age: "", contact: "", course: "", photo: "", dob: "" ,add:""}

  ngOnInit(): void {
  }

  createdata() {
    this.stu1.postdata(this.stu).subscribe()
    alert("data has posted")
    this.router.navigate(["student/liststudent"])
  }

  onFileSelected(event: any) {
    if (event.target?.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          const imgBase64Path = e.target.result;
          this.stu.photo = imgBase64Path;
          return imgBase64Path
        };
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
