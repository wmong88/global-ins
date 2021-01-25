import { TestBed } from '@angular/core/testing';

import { MockApiServiceInterceptor } from './mock-api.service';

describe('MockApiServiceInterceptor', () => {
  let service: MockApiServiceInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockApiServiceInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
