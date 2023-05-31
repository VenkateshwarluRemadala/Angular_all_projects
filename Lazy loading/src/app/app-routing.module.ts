import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:"home-component",component:HomeComponent},
  {path:"lazy-load",loadChildren:()=>import("./lazy-loading/lazyloading/lazyloading.module").then(a=>a.LazyloadingModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
