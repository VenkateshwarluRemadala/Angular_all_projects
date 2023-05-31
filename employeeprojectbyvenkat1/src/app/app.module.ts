import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateemployeeComponent,
    EmployeedetailsComponent,
    EmployeelistComponent,
    EmployeeupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
