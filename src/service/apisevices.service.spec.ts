import { TestBed } from '@angular/core/testing';

import { ApisevicesService } from './apisevices.service';

describe('ApisevicesService', () => {
  let service: ApisevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
