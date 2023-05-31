import { TestBed } from '@angular/core/testing';

import { AcountantService } from './acountant.service';

describe('AcountantService', () => {
  let service: AcountantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcountantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
