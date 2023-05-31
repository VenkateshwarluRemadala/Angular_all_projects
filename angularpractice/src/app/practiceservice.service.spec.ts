import { TestBed } from '@angular/core/testing';

import { PracticeserviceService } from './practiceservice.service';

describe('PracticeserviceService', () => {
  let service: PracticeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
