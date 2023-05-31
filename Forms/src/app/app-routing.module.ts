import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';

const routes: Routes = [{path:"template" ,component:TemplatedrivenformComponent},
{path:"reactive", component:ReactiveformsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
