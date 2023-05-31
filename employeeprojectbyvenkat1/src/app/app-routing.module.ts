import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';

const routes: Routes = [
        {path:'',redirectTo:'createEmployee',pathMatch:'full'},
        {path:"employeesList",component:EmployeelistComponent},
        {path:"createEmployee",component:CreateemployeeComponent},
        {path:"employeeDetails/:id",component:EmployeedetailsComponent},
                {path:"employeeUpdate/:id",component:EmployeeupdateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
