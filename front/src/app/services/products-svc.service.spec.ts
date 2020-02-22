import { TestBed } from '@angular/core/testing';

import { ProductsSvcService } from './products-svc.service';

describe('ProductsSvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsSvcService = TestBed.get(ProductsSvcService);
    expect(service).toBeTruthy();
  });
});
