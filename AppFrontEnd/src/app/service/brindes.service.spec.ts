import { TestBed } from '@angular/core/testing';

import { BrindesService } from './brindes.service'

describe('BrindesService', () => {
  let service: BrindesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrindesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
