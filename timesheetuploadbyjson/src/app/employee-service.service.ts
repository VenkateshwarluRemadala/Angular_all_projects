import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  
  private baseurl = "http://localhost:3000/employeeregistration";

  constructor(private http:HttpClient) { }

  getEmployeeList(): Observable<any> {

    return this.http.get(`${this.baseurl}`);

  }
  // deleteEmployee(id:number): Observable<any>{
  //   return this.http.delete(`${this.baseurl}/${id}`,{responseType:'text'});
  // }
  // getEmployee(id:number): Observable<any>{
  //   return this.http.get(`${this.baseurl}/${id}`);
  // }
  // updateEmployee(id: number, employee:any) {
  //   return this.http.put(`${this.baseurl}/${id}`,employee);
  // }
}
