import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AccountantComponent } from './accountant/accountant.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListacountantComponent } from './listacountant/listacountant.component';
import { CreateacountantComponent } from './createacountant/createacountant.component';
import { UpadateacountantComponent } from './upadateacountant/upadateacountant.component';

import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';


import { HttpClientModule } from '@angular/common/http';
import { AcountantService } from './acountant.service';
import{NgxPaginationModule}from 'ngx-pagination';
import { CustomdirectiveDirective } from './customdirective.directive';
import { CustomPipe } from './custom.pipe';
import { StringPipe } from './string.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ViewchildComponent } from './viewchild/viewchild.component'



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AccountantComponent,
    HomeComponent,
    ListacountantComponent,
    CreateacountantComponent,
    UpadateacountantComponent,
    
    StudentComponent,
    AddstudentComponent,
    ListstudentComponent,
    UpdatestudentComponent,
    CustomdirectiveDirective,
    CustomPipe,
    StringPipe,
    ParentComponent,
    ChildComponent,
    ViewchildComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,NgxPaginationModule
  ],
  providers: [AcountantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
