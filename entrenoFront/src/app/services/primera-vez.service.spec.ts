import { TestBed } from '@angular/core/testing';

import { PrimeraVezService } from './primera-vez.service';

describe('PrimeraVezService', () => {
  let service: PrimeraVezService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeraVezService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
