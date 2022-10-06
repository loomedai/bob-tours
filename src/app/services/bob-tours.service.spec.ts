import { TestBed } from '@angular/core/testing';

import { BobToursService } from './bob-tours.service';

describe('BobToursService', () => {
  let service: BobToursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BobToursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
