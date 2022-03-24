import { TestBed } from '@angular/core/testing';

import { SinterceptorService } from './sinterceptor.service';

describe('SinterceptorService', () => {
  let service: SinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
