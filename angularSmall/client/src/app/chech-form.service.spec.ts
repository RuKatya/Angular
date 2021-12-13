import { TestBed } from '@angular/core/testing';

import { ChechFormService } from './chech-form.service';

describe('ChechFormService', () => {
  let service: ChechFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChechFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
