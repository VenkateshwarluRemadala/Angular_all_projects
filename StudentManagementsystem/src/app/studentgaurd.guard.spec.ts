import { TestBed } from '@angular/core/testing';

import { StudentgaurdGuard } from './studentgaurd.guard';

describe('StudentgaurdGuard', () => {
  let guard: StudentgaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentgaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
