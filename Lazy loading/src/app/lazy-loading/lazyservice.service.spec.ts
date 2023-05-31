import { TestBed } from '@angular/core/testing';

import { LazyserviceService } from './lazyservice.service';

describe('LazyserviceService', () => {
  let service: LazyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
