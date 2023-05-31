import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTimesheetuploadComponent } from './employee-timesheetupload.component';

describe('EmployeeTimesheetuploadComponent', () => {
  let component: EmployeeTimesheetuploadComponent;
  let fixture: ComponentFixture<EmployeeTimesheetuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTimesheetuploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTimesheetuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
