import { TestBed } from '@angular/core/testing';

import { EmployeeauthgaurdGuard } from './employeeauthgaurd.guard';

describe('EmployeeauthgaurdGuard', () => {
  let guard: EmployeeauthgaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeauthgaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
