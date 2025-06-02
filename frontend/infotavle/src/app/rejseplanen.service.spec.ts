import { TestBed } from '@angular/core/testing';

import { RejseplanenService } from './rejseplanen.service';

describe('RejseplanenService', () => {
  let service: RejseplanenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RejseplanenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
