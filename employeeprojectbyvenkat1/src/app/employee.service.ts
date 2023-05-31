import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  updateEmployee(id: number, employee: Employee) {
    return this.http.put(`${this.baseurl}/${id}`,employee);
  }
  private baseurl=" http://localhost:3000/employees"
  constructor(private http:HttpClient) { }
  getEmployeeList(): Observable<any> {
    return this.http.get(`${this.baseurl}`);

  }
  deleteEmployee(id:number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`,{responseType:'text'});
  }
  getEmployee(id:number): Observable<any>{
    return this.http.get(`${this.baseurl}/${id}`);
  }
}
