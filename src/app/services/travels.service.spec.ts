import { TestBed } from '@angular/core/testing';

import { TravelsService } from './travels.service';

describe('TravelsService', () => {
  let service: TravelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
