import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LazyhomeComponent } from '../lazyhome/lazyhome.component';

import { LoginComponent } from '../login/login.component';
const routes: Routes=[{path:"lazyhome",component:LazyhomeComponent},{path:"login",component:LoginComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class LazyloadingModule { }
