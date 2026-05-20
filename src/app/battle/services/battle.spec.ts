import { TestBed } from '@angular/core/testing';

import { Battle } from './battle';

describe('Battle', () => {
  let service: Battle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Battle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
