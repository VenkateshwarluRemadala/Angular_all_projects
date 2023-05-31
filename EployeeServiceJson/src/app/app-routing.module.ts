import { createComponent } from '@angular/compiler/src/core';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{path:'',redirectTo:'employees',pathMatch:'full'},
{path:'employees',component:ListComponent},
{path:'add', component: CreateComponent },
{
  path:"update/:id",component:UpdateComponent
},
{
  path:"details/:id",component:DetailsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
