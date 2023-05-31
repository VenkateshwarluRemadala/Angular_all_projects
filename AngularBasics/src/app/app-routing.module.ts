
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BasicsComponent } from './basics/basics.component';
import { CreateformComponent } from './createform/createform.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{path:" ",redirectTo:"/home",pathMatch:"full"},
                        {path:"home-component",component:HomeComponent},
                        {path:"basics-component",component:BasicsComponent},
                        {path:"about-component",component:AboutComponent},
                        {path:"registration-component",component:FormComponent},
                        {path:"postdata-component",component:CreateformComponent},
                        {path:"update-component",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
