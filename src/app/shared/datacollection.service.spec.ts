import { TestBed } from '@angular/core/testing';

import { DatacollectionService } from './datacollection.service';

describe('DatacollectionService', () => {
  let service: DatacollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
