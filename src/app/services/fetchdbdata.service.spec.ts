import { TestBed } from '@angular/core/testing';

import { FetchdbdataService } from './fetchdbdata.service';

describe('FetchdbdataService', () => {
  let service: FetchdbdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchdbdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
