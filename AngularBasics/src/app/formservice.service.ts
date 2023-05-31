import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormserviceService {
 baseUrl:any= "http://localhost:3000/forms"
  constructor(private http:HttpClient) { }
  getForms(){
    return this.http.get(this.baseUrl);
    
  }
  
  createForm(form: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, form);
  }
  getForm(id:number){
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  updateForm(id:number,value:any) {
    return this.http.put(`${this.baseUrl}/${id}`,value)
  }

}
