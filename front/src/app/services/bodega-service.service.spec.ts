import { TestBed } from '@angular/core/testing';

import { BodegaServiceService } from './bodega-service.service';

describe('BodegaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BodegaServiceService = TestBed.get(BodegaServiceService);
    expect(service).toBeTruthy();
  });
});
