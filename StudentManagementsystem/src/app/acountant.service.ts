import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcountantService {

  constructor(private http:HttpClient) { }
  baseurl:any="http://localhost:3000/accountant"
  getdata(){
    return this.http.get(this.baseurl)
  }
  createdata(acount:any){
    return this.http.post(this.baseurl,acount)
  }
  deleteacount(id:any){
    return this.http.delete(`${this.baseurl}/${id}`)
    
  }

}
