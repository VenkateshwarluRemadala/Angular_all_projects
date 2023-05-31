import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTimesheetUploadComponent } from './employee-timesheet-upload.component';

describe('EmployeeTimesheetUploadComponent', () => {
  let component: EmployeeTimesheetUploadComponent;
  let fixture: ComponentFixture<EmployeeTimesheetUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTimesheetUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTimesheetUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
