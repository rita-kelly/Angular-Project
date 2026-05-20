import { TestBed } from '@angular/core/testing';

import { Trainer } from './trainer';

describe('Trainer', () => {
  let service: Trainer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Trainer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
