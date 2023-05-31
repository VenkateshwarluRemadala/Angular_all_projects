import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountantComponent } from './accountant/accountant.component';
import { AddstudentComponent } from './addstudent/addstudent.component';

import { CreateacountantComponent } from './createacountant/createacountant.component';

import { HomeComponent } from './home/home.component';
import { ListacountantComponent } from './listacountant/listacountant.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { StudentComponent } from './student/student.component';
import { StudentgaurdGuard } from './studentgaurd.guard';

import { UpadateacountantComponent } from './upadateacountant/upadateacountant.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';

const routes: Routes = [{path:"home",component:HomeComponent }, 
{path:"account",component:AccountantComponent},{path:"listacount",component:ListacountantComponent},
{path:"addacount",component:CreateacountantComponent},
{path:"updateacount",component:UpadateacountantComponent},

{path:'',redirectTo:'account',pathMatch:'full'},
{path:"student",component:StudentComponent,canActivate:[StudentgaurdGuard] ,
children:[{path:"liststudent",component:ListstudentComponent},

{path:"addstudent",component:AddstudentComponent},
{path:"updatestudent",component:UpdatestudentComponent},
{path:'',redirectTo:'student',pathMatch:'full'}
]}
                
                
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
