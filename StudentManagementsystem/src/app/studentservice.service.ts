import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  // constructor(private http1:HttpClient) { }
  constructor(private http1:HttpClient){

  }
    
  private baseurl:any="http://localhost:3000/student"
  getdata1(){
    return this.http1.get(this.baseurl)
  }
  postdata(stu1:any){
    return this.http1.post(this.baseurl,stu1)
  }
  deletestudent1(id:any){
    return this.http1.delete(`${this.baseurl}/${id}`)
  }
}
