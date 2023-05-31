import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeTimesheetuploadComponent } from './employee-timesheetupload/employee-timesheetupload.component';
import { EmployeeauthgaurdGuard } from './employeeauthgaurd.guard';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [{path:'',redirectTo:'employee-login',pathMatch:'full'},
{path:"employee-login", component:EmployeeLoginComponent},
{path:"employee-Registration", component:EmployeeRegistrationComponent},
{path:"admin-home", component:AdminHomeComponent},
{path:"admin-Registration", component:AdminRegistrationComponent},

{path:"navbar", component : NavbarComponent, canActivate :[EmployeeauthgaurdGuard],children:[
{path:"admin-login", component:AdminLoginComponent},
{path:"timesheet-upload", component:EmployeeTimesheetuploadComponent},
{path:'',redirectTo:'timesheet-upload',pathMatch:'full'}
                     
                     ]}
                     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
