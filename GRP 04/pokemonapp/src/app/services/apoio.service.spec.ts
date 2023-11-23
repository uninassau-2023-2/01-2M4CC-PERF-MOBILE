import { TestBed } from '@angular/core/testing';

import { ApoioService } from './apoio.service';

describe('ApoioService', () => {
  let service: ApoioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApoioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
